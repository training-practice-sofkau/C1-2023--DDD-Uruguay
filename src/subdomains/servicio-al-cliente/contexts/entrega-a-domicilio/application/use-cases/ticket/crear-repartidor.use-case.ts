import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { TicketAggregate } from "../../../domain/aggregates";
import { IRepartidorDomainEntity } from "../../../domain/entities/interfaces/ticket";
import { RepartidorDomainEntityBase } from "../../../domain/entities/ticket";
import { ICrearRepartidorCommand } from "../../../domain/interfaces/commands/ticket";
import { IRepartidorCreadoResponse } from "../../../domain/interfaces/responses/ticket";
import { IRepartidorDomainService } from "../../../domain/services";
import { NombreValueObject, VehiculoValueObject } from "../../../domain/value-objects/ticket/repartidor";
import { RepartidorCreadoEventPublisherBase } from '../../../domain/events/publishers/ticket';


export class CrearRepartidorUseCase<
    Command extends ICrearRepartidorCommand = ICrearRepartidorCommand,
    Response extends IRepartidorCreadoResponse = IRepartidorCreadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly ticketAggregateRoot: TicketAggregate;

    constructor(
        private readonly repartidorService?: IRepartidorDomainService<RepartidorDomainEntityBase>,
        private readonly repartidorCreadoEventPublisherBase?: RepartidorCreadoEventPublisherBase,
    ) {
        super();
        this.ticketAggregateRoot = new TicketAggregate({
            repartidorService,
            repartidorCreadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<RepartidorDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityRepartidorDomain(ValueObject);
        return this.exectueTicketAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IRepartidorDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const vehiculo = new VehiculoValueObject(command.vehiculo);

        return {
            nombre,
            vehiculo
        }
    }

    private validateValueObject(
        valueObject: IRepartidorDomainEntity
    ): void {
        const {
            nombre,
            vehiculo
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (vehiculo instanceof VehiculoValueObject && vehiculo.hasErrors())
            this.setErrors(vehiculo.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearRepartidorUseCase',
                this.getErrors(),
            );

    }

    private createEntityRepartidorDomain(
        valueObject: IRepartidorDomainEntity
    ): RepartidorDomainEntityBase {

        const {
            nombre,
            vehiculo
        } = valueObject

        return new RepartidorDomainEntityBase({
            nombre: nombre.valueOf(),
            vehiculo: vehiculo.valueOf()
        })
    }

    private exectueTicketAggregateRoot(
        entity: RepartidorDomainEntityBase,
    ): Promise<RepartidorDomainEntityBase | null> {
        return this.ticketAggregateRoot.crearRepartidor(entity)
    }
}
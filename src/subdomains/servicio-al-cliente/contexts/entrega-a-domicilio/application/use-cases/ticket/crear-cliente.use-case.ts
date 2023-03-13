import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { TicketAggregate } from "../../../domain/aggregates";
import { IClienteDomainEntity } from "../../../domain/entities/interfaces/ticket";
import { ClienteDomainEntityBase } from "../../../domain/entities/ticket";
import { ICrearClienteCommand } from "../../../domain/interfaces/commands/ticket";
import { IClienteCreadoResponse } from "../../../domain/interfaces/responses/ticket";
import { IClienteDomainService } from "../../../domain/services";
import { DireccionValueObject, NombreValueObject } from "../../../domain/value-objects/ticket/cliente";
import { ClienteCreadoEventPublisherBase } from '../../../domain/events/publishers/ticket';


export class CrearClienteUseCase<
    Command extends ICrearClienteCommand = ICrearClienteCommand,
    Response extends IClienteCreadoResponse = IClienteCreadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly ticketAggregateRoot: TicketAggregate;

    constructor(
        private readonly clienteService?: IClienteDomainService<ClienteDomainEntityBase>,
        private readonly clienteCreadoEventPublisherBase?: ClienteCreadoEventPublisherBase,
    ) {
        super();
        this.ticketAggregateRoot = new TicketAggregate({
            clienteService,
            clienteCreadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<ClienteDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClienteDomain(ValueObject);
        return this.exectueTicketAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IClienteDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const direccion = new DireccionValueObject(command.direccion);

        return {
            nombre,
            direccion
        }
    }

    private validateValueObject(
        valueObject: IClienteDomainEntity
    ): void {
        const {
            nombre,
            direccion
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (direccion instanceof DireccionValueObject && direccion.hasErrors())
            this.setErrors(direccion.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearClienteUseCase',
                this.getErrors(),
            );

    }

    private createEntityClienteDomain(
        valueObject: IClienteDomainEntity
    ): ClienteDomainEntityBase {

        const {
            nombre,
            direccion
        } = valueObject

        return new ClienteDomainEntityBase({
            nombre: nombre.valueOf(),
            direccion: direccion.valueOf()
        })
    }

    private exectueTicketAggregateRoot(
        entity: ClienteDomainEntityBase,
    ): Promise<ClienteDomainEntityBase | null> {
        return this.ticketAggregateRoot.crearCliente(entity)
    }
}
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IEntradaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { EntradaDomainEntityBase } from "../../../domain/entities/pedido";
import { ICrearEntradaCommand } from "../../../domain/interfaces/commands/pedido";
import { IEntradaCreadaResponse } from "../../../domain/interfaces/responses/pedido";
import { IEntradaDomainService } from "../../../domain/services";
import { NombreValueObject } from "../../../domain/value-objects/pedido/entrada";
import { EntradaCreadaEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CrearEntradaUseCase<
    Command extends ICrearEntradaCommand = ICrearEntradaCommand,
    Response extends IEntradaCreadaResponse = IEntradaCreadaResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly entradaService?: IEntradaDomainService<EntradaDomainEntityBase>,
        private readonly entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            entradaService,
            entradaCreadaEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<EntradaDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityEntradaDomain(ValueObject);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IEntradaDomainEntity {

        const nombre = new NombreValueObject(command.nombre);

        return {
            nombre
        }
    }

    private validateValueObject(
        valueObject: IEntradaDomainEntity
    ): void {
        const {
            nombre
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearEntradaUseCase',
                this.getErrors(),
            );

    }

    private createEntityEntradaDomain(
        valueObject: IEntradaDomainEntity
    ): EntradaDomainEntityBase {

        const {
            nombre
        } = valueObject

        return new EntradaDomainEntityBase({
            nombre: nombre.valueOf()
        })
    }

    private exectuePedidoAggregateRoot(
        entity: EntradaDomainEntityBase,
    ): Promise<EntradaDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearEntrada(entity)
    }
}
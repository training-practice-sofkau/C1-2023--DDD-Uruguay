import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPedidoDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PedidoDomainEntityBase } from "../../../domain/entities/pedido";
import { IObtenerPedidoCommand } from "../../../domain/interfaces/commands/pedido";
import { IPedidoObtenidoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPedidoDomainService } from "../../../domain/services";
import { PedidoIdValueObject } from "../../../domain/value-objects/pedido";
import { PedidoObtenidoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class ObtenerPedidoUseCase<
    Command extends IObtenerPedidoCommand = IObtenerPedidoCommand,
    Response extends IPedidoObtenidoResponse = IPedidoObtenidoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>,
        private readonly pedidoObtenidoEventPublisherBase?: PedidoObtenidoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            pedidoService,
            pedidoObtenidoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<PedidoDomainEntityBase | null> {
        const ValueObject = this.obtenerValueObject(command);
        this.validateValueObject(ValueObject);
        return this.exectuePedidoAggregateRoot(ValueObject.pedidoId.valueOf())
    }

    private obtenerValueObject(
        command: Command
    ): IPedidoDomainEntity {

        const pedidoId = new PedidoIdValueObject(command.pedidoId);

        return {
            pedidoId
        }
    }

    private validateValueObject(
        valueObject: IPedidoDomainEntity
    ): void {
        const {
            pedidoId
        } = valueObject

        if (pedidoId instanceof PedidoIdValueObject && pedidoId.hasErrors())
            this.setErrors(pedidoId.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por ObtenerPedidoUseCase',
                this.getErrors(),
            );

    }

    private exectuePedidoAggregateRoot(
        pedidoId: string,
    ): Promise<PedidoDomainEntityBase | null> {
        return this.pedidoAggregateRoot.obtenerPedido(pedidoId);
    }
}
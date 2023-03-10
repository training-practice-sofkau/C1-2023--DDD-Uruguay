import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPedidoDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PedidoDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarEstadoPedidoCommand } from "../../../domain/interfaces/commands/pedido";
import { IEstadoPedidoCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPedidoDomainService } from "../../../domain/services";
import { PedidoIdValueObject, EstadoValueObject } from "../../../domain/value-objects/pedido";
import { EstadoPedidoCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CambiarEstadoPedidoUseCase<
    Command extends ICambiarEstadoPedidoCommand = ICambiarEstadoPedidoCommand,
    Response extends IEstadoPedidoCambiadoResponse = IEstadoPedidoCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>,
        private readonly estadoPedidoCambiadoEventPublisherBase?: EstadoPedidoCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            pedidoService,
            estadoPedidoCambiadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<string | null> {
        const valueObject = this.createValueObject(command);
        this.validateValueObject(valueObject);
        const entity = await this.obtenerEntityPedidoDomain(valueObject);
        const entityUpdated = this.cambiarEstadoEntityPedidoDomain(entity, valueObject);
        return this.exectuePedidoAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IPedidoDomainEntity {

        const pedidoId = new PedidoIdValueObject(command.pedidoId);
        const estado = new EstadoValueObject(command.nuevoEstado);

        return {
            pedidoId,
            estado
        }
    }

    private validateValueObject(
        valueObject: IPedidoDomainEntity
    ): void {
        const {
            pedidoId,
            estado
        } = valueObject

        if (pedidoId instanceof PedidoIdValueObject && pedidoId.hasErrors())
            this.setErrors(pedidoId.getErrors());

        if (estado instanceof EstadoValueObject && estado.hasErrors())
            this.setErrors(estado.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarEstadoPedidoUseCase',
                this.getErrors(),
            );

    }

    private async obtenerEntityPedidoDomain(
        valueObject: IPedidoDomainEntity
    ): Promise<PedidoDomainEntityBase> {

        const {
            pedidoId
        } = valueObject;

        return this.pedidoService.obtenerPedido(pedidoId.valueOf());
    }

    private cambiarEstadoEntityPedidoDomain(
        entity: PedidoDomainEntityBase,
        valueObject: IPedidoDomainEntity
    ): PedidoDomainEntityBase {

        const {
            estado
        } = valueObject;

        entity.estado = estado;

        return entity;
    }

    private exectuePedidoAggregateRoot(
        entity: PedidoDomainEntityBase,
    ): Promise<string | null> {
        const pedidoId = entity.pedidoId.valueOf();
        const nuevoEstado = entity.estado.valueOf();

        return this.pedidoAggregateRoot.cambiarEstadoPedido(pedidoId, nuevoEstado)
    }
}
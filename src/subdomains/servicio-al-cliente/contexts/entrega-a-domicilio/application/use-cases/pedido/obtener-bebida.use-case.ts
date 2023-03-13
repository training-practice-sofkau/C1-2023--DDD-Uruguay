import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { BebidaDomainEntityBase } from "../../../domain/entities/pedido";
import { IObtenerBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { IBebidaObtenidaResponse } from "../../../domain/interfaces/responses/pedido";
import { IBebidaDomainService } from "../../../domain/services";
import { BebidaIdValueObject } from "../../../domain/value-objects/pedido/bebida";
import { BebidaObtenidaEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class ObtenerBebidaUseCase<
    Command extends IObtenerBebidaCommand = IObtenerBebidaCommand,
    Response extends IBebidaObtenidaResponse = IBebidaObtenidaResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>,
        private readonly bebidaObtenidaEventPublisherBase?: BebidaObtenidaEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            bebidaService,
            bebidaObtenidaEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<BebidaDomainEntityBase | null> {
        const ValueObject = this.obtenerValueObject(command);
        this.validateValueObject(ValueObject);
        return this.exectuePedidoAggregateRoot(ValueObject.bebidaId.valueOf())
    }

    private obtenerValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const bebidaId = new BebidaIdValueObject(command.bebidaId);

        return {
            bebidaId
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            bebidaId
        } = valueObject

        if (bebidaId instanceof BebidaIdValueObject && bebidaId.hasErrors())
            this.setErrors(bebidaId.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por ObtenerBebidaUseCase',
                this.getErrors(),
            );

    }

    private exectuePedidoAggregateRoot(
        bebidaId: string,
    ): Promise<BebidaDomainEntityBase | null> {
        return this.pedidoAggregateRoot.obtenerBebida(bebidaId);
    }
}
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { BebidaDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarTamanioBebidaCommand, IObtenerBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { IBebidaObtenidaResponse, ITamanioBebidaCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IBebidaDomainService } from "../../../domain/services";
import { BebidaIdValueObject, TamanioValueObject } from "../../../domain/value-objects/pedido";
import { TamanioBebidaCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';
import { ObtenerBebidaUseCase } from './obtener-bebida.use-case';


export class CambiarTamanioBebidaUseCase<
    Command extends ICambiarTamanioBebidaCommand = ICambiarTamanioBebidaCommand,
    Response extends ITamanioBebidaCambiadoResponse = ITamanioBebidaCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;
    private readonly ObtenerBebidaUseCase: ObtenerBebidaUseCase<
        IObtenerBebidaCommand,
        IBebidaObtenidaResponse
    >;

    constructor(
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>,
        private readonly tamanioBebidaCambiadoEventPublisherBase?: TamanioBebidaCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            bebidaService,
            tamanioBebidaCambiadoEventPublisherBase
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
        const entity = await this.obtenerEntityBebidaDomain(command);
        const entityUpdated = this.cambiarTamanioEntityBebidaDomain(entity, valueObject);
        return this.exectueBebidaAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const bebidaId = new BebidaIdValueObject(command.bebidaId);
        const tamanio = new TamanioValueObject(command.nuevoTamanio);

        return {
            bebidaId,
            tamanio
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            tamanio
        } = valueObject

        if (tamanio instanceof TamanioValueObject && tamanio.hasErrors())
            this.setErrors(tamanio.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarTamanioBebidaUseCase',
                this.getErrors(),
            );

    }

    private async obtenerEntityBebidaDomain(
        command: IObtenerBebidaCommand
    ): Promise<BebidaDomainEntityBase> {
        const success = (await this.ObtenerBebidaUseCase.execute(command)).success;
        const entity = (await this.ObtenerBebidaUseCase.execute(command)).data;

        if (entity === null || success === false)
            throw new Error('No se ha podido obtener la entidad');

        return entity;
    }

    private cambiarTamanioEntityBebidaDomain(
        entity: BebidaDomainEntityBase,
        valueObject: IBebidaDomainEntity
    ): BebidaDomainEntityBase {

        const {
            tamanio
        } = valueObject;

        entity.tamanio = tamanio;

        return entity;
    }

    private exectueBebidaAggregateRoot(
        entity: BebidaDomainEntityBase,
    ): Promise<string | null> {
        const bebidaId = entity.bebidaId.valueOf();
        const nuevoTamanio = entity.tamanio.valueOf();

        return this.pedidoAggregateRoot.cambiarTamañoBebida(bebidaId, nuevoTamanio)
    }
}
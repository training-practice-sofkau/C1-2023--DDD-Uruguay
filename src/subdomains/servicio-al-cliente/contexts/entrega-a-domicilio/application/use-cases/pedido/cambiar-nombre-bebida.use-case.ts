import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { BebidaDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarNombreBebidaCommand, IObtenerBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { IBebidaObtenidaResponse, INombreBebidaCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IBebidaDomainService } from "../../../domain/services";
import { BebidaIdValueObject, NombreValueObject } from "../../../domain/value-objects/pedido";
import { NombreBebidaCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';
import { ObtenerBebidaUseCase } from './obtener-bebida.use-case';


export class CambiarNombreBebidaUseCase<
    Command extends ICambiarNombreBebidaCommand = ICambiarNombreBebidaCommand,
    Response extends INombreBebidaCambiadoResponse = INombreBebidaCambiadoResponse
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
        private readonly nombreBebidaCambiadoEventPublisherBase?: NombreBebidaCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            bebidaService,
            nombreBebidaCambiadoEventPublisherBase
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
        const entityUpdated = this.cambiarNombreEntityBebidaDomain(entity, valueObject);
        return this.exectueBebidaAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const bebidaId = new BebidaIdValueObject(command.bebidaId);
        const nombre = new NombreValueObject(command.nuevoNombre);

        return {
            bebidaId,
            nombre
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            nombre
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarNombreBebidaUseCase',
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

    private cambiarNombreEntityBebidaDomain(
        entity: BebidaDomainEntityBase,
        valueObject: IBebidaDomainEntity
    ): BebidaDomainEntityBase {

        const {
            nombre
        } = valueObject;

        entity.nombre = nombre;

        return entity;
    }

    private exectueBebidaAggregateRoot(
        entity: BebidaDomainEntityBase,
    ): Promise<string | null> {
        const bebidaId = entity.bebidaId.valueOf();
        const nuevoNombre = entity.nombre.valueOf();

        return this.pedidoAggregateRoot.cambiarNombreBebida(bebidaId, nuevoNombre)
    }
}
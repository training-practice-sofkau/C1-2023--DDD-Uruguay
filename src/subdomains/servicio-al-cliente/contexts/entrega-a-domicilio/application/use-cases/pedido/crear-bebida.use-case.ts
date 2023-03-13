import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { BebidaDomainEntityBase } from "../../../domain/entities/pedido";
import { ICrearBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { IBebidaCreadaResponse } from "../../../domain/interfaces/responses/pedido";
import { IBebidaDomainService } from "../../../domain/services";
import { NombreValueObject, TamanioValueObject } from "../../../domain/value-objects/pedido/bebida";
import { BebidaCreadaEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CrearBebidaUseCase<
    Command extends ICrearBebidaCommand = ICrearBebidaCommand,
    Response extends IBebidaCreadaResponse = IBebidaCreadaResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>,
        private readonly bebidaCreadaEventPublisherBase?: BebidaCreadaEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            bebidaService,
            bebidaCreadaEventPublisherBase
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
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityBebidaDomain(ValueObject);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const tamanio = new TamanioValueObject(command.tamanio);

        return {
            nombre,
            tamanio
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            nombre,
            tamanio
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (tamanio instanceof TamanioValueObject && tamanio.hasErrors())
            this.setErrors(tamanio.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearBebidaUseCase',
                this.getErrors(),
            );

    }

    private createEntityBebidaDomain(
        valueObject: IBebidaDomainEntity
    ): BebidaDomainEntityBase {

        const {
            nombre,
            tamanio
        } = valueObject

        return new BebidaDomainEntityBase({
            nombre: nombre.valueOf(),
            tamanio: tamanio.valueOf()
        })
    }

    private exectuePedidoAggregateRoot(
        entity: BebidaDomainEntityBase,
    ): Promise<BebidaDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearBebida(entity)
    }
}
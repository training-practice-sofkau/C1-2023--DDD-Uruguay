import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPostreDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PostreDomainEntityBase } from "../../../domain/entities/pedido";
import { ICrearPostreCommand } from "../../../domain/interfaces/commands/pedido";
import { IPostreCreadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPostreDomainService } from "../../../domain/services";
import { NombreValueObject, TamanioValueObject, EsParaVeganosValueObject } from "../../../domain/value-objects/pedido/postre";
import { PostreCreadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CrearPostreUseCase<
    Command extends ICrearPostreCommand = ICrearPostreCommand,
    Response extends IPostreCreadoResponse = IPostreCreadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>,
        private readonly postreCreadoEventPublisherBase?: PostreCreadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            postreService,
            postreCreadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<PostreDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityPostreDomain(ValueObject);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IPostreDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const tamanio = new TamanioValueObject(command.tamanio);
        const esParaVeganos = new EsParaVeganosValueObject(command.esParaVeganos);

        return {
            nombre,
            tamanio,
            esParaVeganos
        }
    }

    private validateValueObject(
        valueObject: IPostreDomainEntity
    ): void {
        const {
            nombre,
            tamanio,
            esParaVeganos
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (tamanio instanceof TamanioValueObject && tamanio.hasErrors())
            this.setErrors(tamanio.getErrors());

        if (esParaVeganos instanceof EsParaVeganosValueObject && esParaVeganos.hasErrors())
            this.setErrors(esParaVeganos.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearPostreUseCase',
                this.getErrors(),
            );

    }

    private createEntityPostreDomain(
        valueObject: IPostreDomainEntity
    ): PostreDomainEntityBase {

        const {
            nombre,
            tamanio,
            esParaVeganos
        } = valueObject

        return new PostreDomainEntityBase({
            nombre: nombre.valueOf(),
            tamanio: tamanio.valueOf(),
            esParaVeganos: esParaVeganos.valueOf()
        })
    }

    private exectuePedidoAggregateRoot(
        entity: PostreDomainEntityBase,
    ): Promise<PostreDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearPostre(entity)
    }
}
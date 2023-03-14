import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPedidoDomainEntity } from "../../../domain/entities/interfaces/pedido";
import {
    BebidaDomainEntityBase,
    EntradaDomainEntityBase,
    PedidoDomainEntityBase,
    PlatoPrincipalDomainEntityBase,
    PostreDomainEntityBase
} from "../../../domain/entities/pedido";

import { PedidoCreadoEventPublisherBase } from "../../../domain/events/publishers/pedido";

import { ICrearPedidoCommand } from "../../../domain/interfaces/commands/pedido";
import { IPedidoCreadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPedidoDomainService } from "../../../domain/services";

import {
    EstadoValueObject,
    PrecioValueObject,
    TamanioValueObject,
    NombreValueObject
} from "../../../domain/value-objects/pedido";

import { GuarnicionValueObject } from "../../../domain/value-objects/pedido/plato-principal";
import { EsParaVeganosValueObject } from "../../../domain/value-objects/pedido/postre";


export class CrearPedidoUseCase<
    Command extends ICrearPedidoCommand = ICrearPedidoCommand,
    Response extends IPedidoCreadoResponse = IPedidoCreadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly pedidoService: IPedidoDomainService<PedidoDomainEntityBase>,
        private readonly pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            pedidoService,
            pedidoCreadoEventPublisherBase
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
        const ValueObjectAndEntity = this.createValueObjectAndEntity(command);
        this.validateValueObject(ValueObjectAndEntity);
        const entity = this.createEntityPedidoDomain(ValueObjectAndEntity);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObjectAndEntity(
        command: Command
    ): IPedidoDomainEntity {

        const estado = new EstadoValueObject(command.estado);
        const precio = new PrecioValueObject(command.precio);
        const entrada = new EntradaDomainEntityBase(command.entrada);
        const platoPrincipal = new PlatoPrincipalDomainEntityBase(command.platoPrincipal);
        const bebida = new BebidaDomainEntityBase(command.bebida);
        const postre = new PostreDomainEntityBase(command.postre);

        return {
            estado,
            precio,
            entrada,
            platoPrincipal,
            bebida,
            postre
        }
    }

    private validateValueObject(
        valueObject: IPedidoDomainEntity
    ): void {
        const {
            estado,
            precio,
            entrada,
            platoPrincipal,
            bebida,
            postre
        } = valueObject

        if (estado instanceof EstadoValueObject && estado.hasErrors())
            this.setErrors(estado.getErrors());

        if (precio instanceof PrecioValueObject && precio.hasErrors())
            this.setErrors(precio.getErrors());
        
        if (entrada instanceof EntradaDomainEntityBase) {
            if(entrada.nombre instanceof NombreValueObject && entrada.nombre.hasErrors())
            this.setErrors(entrada.nombre.getErrors());
        }
        
        if (platoPrincipal instanceof PlatoPrincipalDomainEntityBase) {
            if(platoPrincipal.nombre instanceof NombreValueObject && platoPrincipal.nombre.hasErrors())
            this.setErrors(platoPrincipal.nombre.getErrors());

            if(platoPrincipal.guarnicion instanceof GuarnicionValueObject && platoPrincipal.guarnicion.hasErrors())
            this.setErrors(platoPrincipal.guarnicion.getErrors());
        }

        if (bebida instanceof BebidaDomainEntityBase) {
            if(bebida.nombre instanceof NombreValueObject && bebida.nombre.hasErrors())
            this.setErrors(bebida.nombre.getErrors());

            if(bebida.tamanio instanceof TamanioValueObject && bebida.tamanio.hasErrors())
            this.setErrors(bebida.tamanio.getErrors());
        }

        if (postre instanceof PostreDomainEntityBase) {
            if(postre.nombre instanceof NombreValueObject && postre.nombre.hasErrors())
            this.setErrors(postre.nombre.getErrors());

            if(postre.tamanio instanceof TamanioValueObject && postre.tamanio.hasErrors())
            this.setErrors(postre.tamanio.getErrors());

            if(postre.esParaVeganos instanceof EsParaVeganosValueObject && postre.esParaVeganos.hasErrors())
            this.setErrors(postre.esParaVeganos.getErrors());
        }

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearPedidoUseCase',
                this.getErrors(),
            );

    }

    private createEntityPedidoDomain(
        valueObject: IPedidoDomainEntity
    ): PedidoDomainEntityBase {

        const {
            estado,
            precio,
            entrada,
            platoPrincipal,
            bebida,
            postre
        } = valueObject

        return new PedidoDomainEntityBase({
            estado: estado.valueOf(),
            precio: precio.valueOf(),
            entrada: entrada,
            platoPrincipal: platoPrincipal,
            bebida: bebida,
            postre: postre
        })
    }

    private exectuePedidoAggregateRoot(
        entity: PedidoDomainEntityBase,
    ): Promise<PedidoDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearPedido(entity)
    }
}
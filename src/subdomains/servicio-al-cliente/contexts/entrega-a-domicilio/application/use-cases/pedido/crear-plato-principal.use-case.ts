import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPlatoPrincipalDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PlatoPrincipalDomainEntityBase } from "../../../domain/entities/pedido";
import { ICrearPlatoPrincipalCommand } from "../../../domain/interfaces/commands/pedido";
import { IPlatoPrincipalCreadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPlatoPrincipalDomainService } from "../../../domain/services";
import { GuarnicionValueObject, NombreValueObject, } from "../../../domain/value-objects/pedido/plato-principal";
import { PlatoPrincipalCreadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CrearPlatoPrincipalUseCase<
    Command extends ICrearPlatoPrincipalCommand = ICrearPlatoPrincipalCommand,
    Response extends IPlatoPrincipalCreadoResponse = IPlatoPrincipalCreadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>,
        private readonly platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            platoPrincipalService,
            platoPrincipalCreadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<PlatoPrincipalDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityPlatoPrincipalDomain(ValueObject);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IPlatoPrincipalDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const guarnicion = new GuarnicionValueObject(command.guarnicion);

        return {
            nombre,
            guarnicion
        }
    }

    private validateValueObject(
        valueObject: IPlatoPrincipalDomainEntity
    ): void {
        const {
            nombre,
            guarnicion
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (guarnicion instanceof GuarnicionValueObject && guarnicion.hasErrors())
            this.setErrors(guarnicion.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearPlatoPrincipalUseCase',
                this.getErrors(),
            );

    }

    private createEntityPlatoPrincipalDomain(
        valueObject: IPlatoPrincipalDomainEntity
    ): PlatoPrincipalDomainEntityBase {

        const {
            nombre,
            guarnicion
        } = valueObject

        return new PlatoPrincipalDomainEntityBase({
            nombre: nombre.valueOf(),
            guarnicion: guarnicion.valueOf()
        })
    }

    private exectuePedidoAggregateRoot(
        entity: PlatoPrincipalDomainEntityBase,
    ): Promise<PlatoPrincipalDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearPlatoPrincipal(entity)
    }
}
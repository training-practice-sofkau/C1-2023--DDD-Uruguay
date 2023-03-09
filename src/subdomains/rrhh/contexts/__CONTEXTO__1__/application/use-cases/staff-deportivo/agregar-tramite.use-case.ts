import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import {  FechaValueObject, StaffDeportivoAggregate } from "../../../domain";
import { ITramiteDomainService } from '../../../domain/services/staff-Deportivo/tramite.domain-service';
import { TramiteAgregadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { ICrearTramiteCommands } from '../../../domain/interfaces/commands/staff-deportivo/crear-tramite.commands';
import { ITramiteCreadoResponse } from '../../../domain/interfaces/responses/staff-deportivo/tramite-creado.response';
import { TramiteDomainEntity } from '../../../domain/entities/tramite/tramite.entity.interface';
import { ITramiteDomainInterface } from '../../../domain/entities/interfaces/tramite/tramite.domain-interface';

export class AgregarTramiteUseCase extends ValueObjectErrorHandler
    implements IUseCase<ICrearTramiteCommands, ITramiteCreadoResponse> {

    private readonly aggregateRoot: StaffDeportivoAggregate;

    constructor(
        private readonly tramiteService: ITramiteDomainService,
        private readonly tamiteAgregadoEvent: TramiteAgregadoEventPublisher,
    ) {
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({ tramiteService, tamiteAgregadoEvent });
    }

    //Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
    async execute(command?: ICrearTramiteCommands): Promise<ITramiteCreadoResponse> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }
    }

    //Crea todo lo que tiene el comando con los value Object 
    private async executeCommand(command: ICrearTramiteCommands): Promise<TramiteDomainEntity | null> {

        //Llamada a la funcion que crea lso value object 
        const ValueObject = this.createValueObject(command);

        //Llama para validar los value object 
        this.validateValueObject(ValueObject);

        //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
        const entity = this.createEntityClientDomain(ValueObject);

        //Llama a la funcion que se conecta con el servicio del agregado 
        return this.exectueOrderAggregateRoot(entity)
    }

    //Crea los value Object , comoo parametro se tiene un comando y retona un interface porque es la que tiene los OV
    private createValueObject(command: ICrearTramiteCommands): ITramiteDomainInterface {

        const fecha = new FechaValueObject(command.fecha);

        return {
            fecha
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: ITramiteDomainInterface): void {

        const {
            fecha,
        } = valueObject

        if (fecha instanceof FechaValueObject && fecha.hasErrors())
            this.setErrors(fecha.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    //Crea la entidad en si
    private createEntityClientDomain(
        valueObject: ITramiteDomainInterface
    ): TramiteDomainEntity {

        const {
            fecha
        } = valueObject

        return new TramiteDomainEntity({

            fecha: fecha.valueOf()
        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueOrderAggregateRoot(
        entity: TramiteDomainEntity,
    ): Promise<TramiteDomainEntity | null> {
        return this.aggregateRoot.CrearTramite(entity)
    }
}



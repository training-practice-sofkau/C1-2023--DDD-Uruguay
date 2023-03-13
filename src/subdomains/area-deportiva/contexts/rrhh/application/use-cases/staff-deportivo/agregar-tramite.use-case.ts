import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import {  FechaValueObject, StaffDeportivoAggregate } from "../../../domain";
import { ITramiteDomainService } from '../../../domain/services/staff-Deportivo/tramite.domain-service';
import { TramiteAgregadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { ICrearTramiteCommands } from '../../../domain/interfaces/commands/staff-deportivo/crear-tramite.commands';
import { ITramiteCreadoResponse } from '../../../domain/interfaces/responses/staff-deportivo/tramite-creado.response';
import { TramiteDomainEntity } from '../../../domain/entities/tramite/tramite.entity.interface';
import { ITramiteDomainInterface } from '../../../domain/entities/interfaces/tramite/tramite.domain-interface';
import { IdValueObject } from '../../../domain/value-objects/id/id.value-object';
import { NegociacionDomainEntity } from '../../../domain/entities/negociacion/negociacion.domain-entity';
import { TerminosACumplirValueObject } from '../../../domain/value-objects/terminos-a-cumplir/terminos-a-cumplir.value-object';
import { StateValueObject } from '../../../domain/value-objects/state/state.value-object';
import { INegociacionDomainEntityInterface } from '../../../domain/entities/interfaces/negociacion/negociacion.domain-entity.interface';
import { TipoNegociacionValueObject } from '../../../domain/value-objects/tipo-negociacion/tipo-negociacion.value-object';

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
        //atributos de tramite
        const tramiteId = new IdValueObject(command.tramiteId);
        const fecha = new FechaValueObject(command.fecha);

        //atributo de negociacion
        const negociacionId = new IdValueObject(command.negociacionId);
        const equipoSalidaId = new IdValueObject(command.equipoSalidaId);
        const equipoNuevoId = new IdValueObject(command.equipoEntradaId);
        const tipoNegociacion = new TipoNegociacionValueObject(command.tipoNegociacion);
        const terminoACumplir = new TerminosACumplirValueObject(command.terminoACumplir);
        const state = new StateValueObject(command.state) ;
        
        const negociacion : INegociacionDomainEntityInterface = {
            negociacionId,
            equipoSalidaId,
            equipoNuevoId,
            tipoNegociacion,
            terminoACumplir,
            state,
        };

        return {
            tramiteId,
            fecha,
            negociacion
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: ITramiteDomainInterface): void {

        const {
            tramiteId,
            fecha,
            negociacion
        } = valueObject

        if (tramiteId instanceof IdValueObject && tramiteId.hasErrors())
        this.setErrors(tramiteId.getErrors());

        if (fecha instanceof FechaValueObject && fecha.hasErrors())
            this.setErrors(fecha.getErrors());

        if (negociacion.negociacionId instanceof IdValueObject && negociacion.negociacionId.hasErrors())
            this.setErrors(negociacion.negociacionId.getErrors());

        if (negociacion.equipoNuevoId instanceof IdValueObject && negociacion.equipoNuevoId.hasErrors())
        this.setErrors(negociacion.equipoNuevoId.getErrors());

        if (negociacion.equipoSalidaId instanceof IdValueObject && negociacion.equipoSalidaId.hasErrors())
        this.setErrors(negociacion.equipoSalidaId.getErrors());

        if (negociacion.tipoNegociacion instanceof TipoNegociacionValueObject && negociacion.tipoNegociacion.hasErrors())
        this.setErrors(negociacion.tipoNegociacion.getErrors());

        if (negociacion.terminoACumplir instanceof TerminosACumplirValueObject && negociacion.terminoACumplir.hasErrors())
        this.setErrors(negociacion.terminoACumplir.getErrors());

        if (negociacion.state instanceof StateValueObject && negociacion.state.hasErrors())
        this.setErrors(negociacion.state.getErrors());

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
            tramiteId,
            fecha,
            negociacion
        } = valueObject

        return new TramiteDomainEntity({
            tramiteId: tramiteId,
            fecha: fecha,
            negociacion : new NegociacionDomainEntity({
                negociacionId: negociacion.negociacionId,
                equipoSalidaId: negociacion.equipoSalidaId,
                equipoNuevoId: negociacion.equipoNuevoId,
                tipoNegociacion: negociacion.tipoNegociacion,
                terminoACumplir: negociacion.terminoACumplir,
                state: negociacion.state,
            })

        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueOrderAggregateRoot(
        entity: TramiteDomainEntity,
    ): Promise<TramiteDomainEntity | null> {
        return this.aggregateRoot.CrearTramite(entity)
    }
}



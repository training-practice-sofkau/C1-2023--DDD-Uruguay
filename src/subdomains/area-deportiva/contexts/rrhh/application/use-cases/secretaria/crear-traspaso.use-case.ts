import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SecretariaAggregate, ContratoDomainEntity, FechaValueObject, IdValueObject, CostoValueObject, StateValueObject, ITraspasoDomainInterface } from "../../../domain";
import { INegociarTraspasoCommands } from '../../../domain/interfaces/commands/secretaria/negociar-traspaso.commands.interface';
import { ITraspasoNegociadoResponse } from '../../../domain/interfaces/responses/secretaria/traspaso-negociado.response.interface';
import { ITraspasoDomainService } from '../../../domain/services/secretaria/traspaso.domain-service';
import { TraspasoNegociadoEventPublisher } from '../../../domain/events/publishers/secretaria/traspaso-negociado.event-publisher';
import { TraspasoDomainEntity } from '../../../domain/entities/traspaso/traspaso.domain-entity';

export class CrearTraspasoUseCase extends ValueObjectErrorHandler
implements IUseCase<INegociarTraspasoCommands, ITraspasoNegociadoResponse> {

    private readonly aggregateRoot: SecretariaAggregate;

    constructor(
        private readonly traspasoService: ITraspasoDomainService,
        private readonly traspasoNegociadoEvent: TraspasoNegociadoEventPublisher,
    ) {
        super();
        this.aggregateRoot = new SecretariaAggregate({ traspasoService, traspasoNegociadoEvent });
    }

    //Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
    async execute(command?: INegociarTraspasoCommands): Promise<ITraspasoNegociadoResponse> {
        
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }

    }

    //Crea todo lo que tiene el comando con los value Object 
    private async executeCommand(command: INegociarTraspasoCommands):Promise<ContratoDomainEntity | null> {

        //Llamada a la funcion que crea lso value object 
        const ValueObject = this.createValueObject(command);

        //Llama para validar los value object 
        this.validateValueObject(ValueObject);

        //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
        const entity = this.createTraspasoEntityDomain(ValueObject);

        //Llama a la funcion que se conecta con el servicio del agregado 
        return this.exectueOrderAggregateRoot(entity)
    }


    //Crea los value Object , comoo parametro se tiene un comando y retona un interface porque es la que tiene los OV
    private createValueObject(command: INegociarTraspasoCommands): ITraspasoDomainInterface {

        const fechaSalida = new FechaValueObject(command.fechaSalida);
        const empleadoId =  new IdValueObject(command.empleadoId);
        const equipoNuevoId =  new IdValueObject(command.equipoNuevoId);
        const equipoSalidaId =  new IdValueObject(command.equipoSalidaId);
        const costo =  new CostoValueObject(command.costo);
        const state  =  new StateValueObject(command.state);

        return {
            fechaSalida,
            empleadoId,
            equipoNuevoId,
            equipoSalidaId,
            costo,
            state,
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: ITraspasoDomainInterface): void {

        const {

            fechaSalida,
            empleadoId,
            equipoNuevoId,
            equipoSalidaId,
            costo,
            state,

        } = valueObject

        if (fechaSalida instanceof FechaValueObject && fechaSalida.hasErrors())
        this.setErrors(fechaSalida.getErrors());

        if (empleadoId instanceof IdValueObject && empleadoId.hasErrors())
            this.setErrors(empleadoId.getErrors());
            
        if (equipoNuevoId instanceof IdValueObject && equipoNuevoId.hasErrors())
            this.setErrors(equipoNuevoId.getErrors());
        
        if (equipoSalidaId instanceof IdValueObject && equipoSalidaId.hasErrors())
            this.setErrors(equipoSalidaId.getErrors());

        if (costo instanceof CostoValueObject && costo.hasErrors())
            this.setErrors(costo.getErrors());

        if (state instanceof StateValueObject && state.hasErrors())
        this.setErrors(state.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    //Crea la entidad en si
    private createTraspasoEntityDomain(valueObject: ITraspasoDomainInterface): TraspasoDomainEntity {

        const {
            fechaSalida,
            empleadoId,
            equipoNuevoId,
            equipoSalidaId,
            costo,
            state,
        } = valueObject

        return new TraspasoDomainEntity({

            fechaSalida: fechaSalida.valueOf(),
            empleadoId: empleadoId.valueOf(),
            equipoNuevoId: equipoNuevoId.valueOf(),
            equipoSalidaId: equipoSalidaId.valueOf(),
            costo: costo.valueOf(),
            state: state.valueOf()

        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueOrderAggregateRoot(entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity | null> {
        return this.aggregateRoot.NegociarContrato(entity)
    }
}





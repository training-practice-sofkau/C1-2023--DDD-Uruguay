import { CostoValueObject, FechaValueObject, ICesionNegociadoResponse, ITramiteDomainInterface, IdValueObject, SecretariaAggregate, TramiteDomainEntity } from '../../../domain';
import { INegociarCesionCommands } from '../../../domain/interfaces/commands/secretaria/negociar-cesion.commands.interface';
import { ICesionDomainService } from '../../../domain/services/secretaria/cesion.domain-service';
import { CesionNegociadoEventPublisher } from '../../../domain/events/publishers/secretaria/cesion-negociado.event-publisher';
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from 'src/libs';
import { CesionDomainEntity } from '../../../domain/entities/cesion/cesion.domain-entity';
import { ICesionDomainInterface } from '../../../domain/entities/interfaces/cesion/cesion.domain-interface';
import { StateValueObject } from '../../../domain/value-objects/state/state.value-object';


export class CrearCesionUseCase extends ValueObjectErrorHandler
implements IUseCase<INegociarCesionCommands, ICesionNegociadoResponse> {

private readonly aggregateRoot: SecretariaAggregate;

constructor(
    private readonly cesionService: ICesionDomainService,
    private readonly cesionNegociadaEvent: CesionNegociadoEventPublisher,
) {
    super();
    this.aggregateRoot = new SecretariaAggregate({ cesionService, cesionNegociadaEvent });
}

//Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
async execute(command?: INegociarCesionCommands): Promise<ICesionNegociadoResponse> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data }
}

//Crea todo lo que tiene el comando con los value Object 
private async executeCommand(command: INegociarCesionCommands):Promise<CesionDomainEntity | null> {

    //Llamada a la funcion que crea lso value object 
    const ValueObject = this.createValueObject(command);

    //Llama para validar los value object 
    this.validateValueObject(ValueObject);

    //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
    const entity = this.createCesionEntityDomain(ValueObject);

    //Llama a la funcion que se conecta con el servicio del agregado 
    return this.exectueOrderAggregateRoot(entity)
}


//Crea los value Object , comoo parametro se tiene un comando y retona un interface porque es la que tiene los OV
private createValueObject(command: INegociarCesionCommands): ICesionDomainInterface {

    const fechaSalida = new FechaValueObject(command.fechaSalida);
    const empleadoId =  new IdValueObject(command.empleadoId);
    const equipoNuevoId =  new IdValueObject(command.equipoNuevoId);
    const costo =  new CostoValueObject(command.costo);
    const state  =  new StateValueObject(command.state);
    
    return {
        fechaSalida,
        empleadoId,
        equipoNuevoId,
        costo,
        state,
    }
}

//Valida los value object
private validateValueObject(valueObject: ICesionDomainInterface): void {

    const {
        fechaSalida,
        empleadoId,
        equipoNuevoId,
        costo,
        state,
    } = valueObject

    if (fechaSalida instanceof FechaValueObject && fechaSalida.hasErrors())
    this.setErrors(fechaSalida.getErrors());

    if (empleadoId instanceof IdValueObject && empleadoId.hasErrors())
        this.setErrors(empleadoId.getErrors());

    if (equipoNuevoId instanceof IdValueObject && equipoNuevoId.hasErrors())
        this.setErrors(equipoNuevoId.getErrors());

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
private createCesionEntityDomain(valueObject: ICesionDomainInterface): CesionDomainEntity {

    const {
        fechaSalida,
        empleadoId,
        equipoNuevoId,
        costo,
        state,
    } = valueObject

    return new CesionDomainEntity({

        fechaSalida: fechaSalida.valueOf(),
        empleadoId: empleadoId.valueOf(),
        equipoNuevoId: equipoNuevoId.valueOf(),
        costo: costo.valueOf(),
        state: state.valueOf(),
    })
}

//Manda a llamar al al servicio y asi usar sus metodos 
private exectueOrderAggregateRoot(entity: CesionDomainEntity): Promise<CesionDomainEntity | null> {
    return this.aggregateRoot.NegociarCesion(entity)
}
}


{}

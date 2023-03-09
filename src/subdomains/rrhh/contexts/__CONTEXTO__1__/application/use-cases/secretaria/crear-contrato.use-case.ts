import { INegociarContratoCommands } from '../../../domain/interfaces/commands/secretaria/negociar-contrato.commands.interface';
import { IContratoNegociadoResponse } from '../../../domain/interfaces/responses/secretaria/contrato-negociado.response.interface';
import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from 'src/libs';
import { ContratoNegociadoEventPublisher } from '../../../domain/events/publishers/secretaria/contrato-negociado.event-publisher';
import { IContratoDomainService } from '../../../domain/services/secretaria/contrato.domain-service';
import { IContratoDomainInterface } from '../../../domain/entities/interfaces/contrato/cotrato.domain-interface';
import { ContratoDomainEntity,StateValueObject, CostoValueObject, FechaValueObject, IdValueObject, SecretariaAggregate } from '../../../domain';

export class CrearContratoUseCase extends ValueObjectErrorHandler
implements IUseCase<INegociarContratoCommands, IContratoNegociadoResponse> {

private readonly aggregateRoot: SecretariaAggregate;

constructor(
    private readonly contratoService: IContratoDomainService,
    private readonly contratoNegocidadoEvent: ContratoNegociadoEventPublisher,
) {
    super();
    this.aggregateRoot = new SecretariaAggregate({ contratoService, contratoNegocidadoEvent });
}

//Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
async execute(command?: INegociarContratoCommands): Promise<IContratoNegociadoResponse> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data }
}

//Crea todo lo que tiene el comando con los value Object 
private async executeCommand(command: INegociarContratoCommands):Promise<ContratoDomainEntity | null> {

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
private createValueObject(command: INegociarContratoCommands): IContratoDomainInterface {

    const fechaFinalizacion = new FechaValueObject(command.fechaFinalizacion);
    const empleadoId =  new IdValueObject(command.empleadoId);
    const costo =  new CostoValueObject(command.costo);
    const state  =  new StateValueObject(command.state);


    return {
        fechaFinalizacion,
        empleadoId,
        costo,
        state,
    }
}

//Valida los value object
private validateValueObject(valueObject: IContratoDomainInterface): void {

    const {
        fechaFinalizacion,
        empleadoId,
        costo,
        state,
    } = valueObject

    if (fechaFinalizacion instanceof FechaValueObject && fechaFinalizacion.hasErrors())
    this.setErrors(fechaFinalizacion.getErrors());

    if (empleadoId instanceof IdValueObject && empleadoId.hasErrors())
        this.setErrors(empleadoId.getErrors());

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
private createCesionEntityDomain(valueObject: IContratoDomainInterface): ContratoDomainEntity {

    const {
        fechaFinalizacion,
        empleadoId,
        costo,
        state,
    } = valueObject

    return new ContratoDomainEntity({

        fechaFinalizacion: fechaFinalizacion.valueOf(),
        empleadoId: empleadoId.valueOf(),
        costo: costo.valueOf(),
        state: state.valueOf(),
    })
}

//Manda a llamar al al servicio y asi usar sus metodos 
private exectueOrderAggregateRoot(entity: ContratoDomainEntity): Promise<ContratoDomainEntity | null> {
    return this.aggregateRoot.NegociarContrato(entity)
}
}





import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { IModificarStateCommands, IStateModificadoResponse, StaffDeportivoAggregate, IStaffDeportivoDomainService, StateModificadoEventPublisher, NegociacionDomainEntity, INegociacionDomainEntityInterface, IdValueObject, StateValueObject, IEquipoNuevoModificadoResponse, IModificarEquipoNuevoCommands } from "../../../domain";
import { EquipoNuevoModificadoEventPublisher } from "../../../domain/events/publishers/negociacion/equipo-nuevo-modificado.event-publisher";

export class ModificarEquipoNuevoUseCase   extends ValueObjectErrorHandler
implements IUseCase<IModificarEquipoNuevoCommands, IEquipoNuevoModificadoResponse> {
    
    private readonly aggregateRoot:StaffDeportivoAggregate;

    constructor(
        private readonly staffDeportivoService: IStaffDeportivoDomainService,
        private readonly negociacionEquipoNuevoModificadoEvent : EquipoNuevoModificadoEventPublisher,
    ){
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,negociacionEquipoNuevoModificadoEvent});
    }


    async execute(command?: IModificarEquipoNuevoCommands): Promise<IEquipoNuevoModificadoResponse> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }
    }

    //Crea todo lo que tiene el comando con los value Object 
    private async executeCommand(command: IModificarEquipoNuevoCommands): Promise<NegociacionDomainEntity | null> {

        //Llamada a la funcion que crea lso value object 
        const ValueObject = this.createValueObject(command);

        //Llama para validar los value object 
        this.validateValueObject(ValueObject);

        //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
        const entity =  this.createEntityNegociacionDomain(ValueObject);

        //Llama a la funcion que se conecta con el servicio del agregado 
        return this.exectueStaffDeportivoAggregateRoot(entity)
    }

    //Crea los value Object 
    private createValueObject(command: IModificarEquipoNuevoCommands): INegociacionDomainEntityInterface {

        
        const negociacionId = new IdValueObject(command.negociacionId);
        const equipoNuevoId= new IdValueObject(command.equipoNuevoId);

        return {
            negociacionId,
            equipoNuevoId,
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: INegociacionDomainEntityInterface): void {

        const {
            negociacionId,
            equipoNuevoId,
        } = valueObject

        if (negociacionId instanceof IdValueObject && negociacionId.hasErrors())
            this.setErrors(negociacionId.getErrors());
        
        if (equipoNuevoId instanceof IdValueObject && equipoNuevoId.hasErrors())
            this.setErrors(equipoNuevoId.getErrors());


        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    //Crea la entidad en si
    private createEntityNegociacionDomain(
        valueObject: INegociacionDomainEntityInterface
    ): NegociacionDomainEntity {

        const {
            negociacionId,
            equipoNuevoId,
            
        } = valueObject

        return new NegociacionDomainEntity({
            negociacionId : negociacionId,
            equipoNuevoId: equipoNuevoId,
        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueStaffDeportivoAggregateRoot(
        entity: NegociacionDomainEntity,
    ): Promise<NegociacionDomainEntity | null> {
        return  this.aggregateRoot.NegociacionModificarEquipoNuevo(entity);
    }
}
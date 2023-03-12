import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { StaffDeportivoAggregate, IStaffDeportivoDomainService,  IdValueObject } from "../../../domain";
import { IModificarTipoNegociacionCommands } from '../../../domain/interfaces/commands/negociacion/modificar-tipo-negociacion.commands';
import { ITipoNegociacionModificadoResponse } from '../../../domain/interfaces/responses/negociacion/tipo-negociacion-modificado.response';
import { TipoDeNegociacionModificadoEventPublisher } from '../../../domain/events/publishers/negociacion/tipo-de-negociacion-modificado.event-publisher';
import { NegociacionDomainEntity } from '../../../domain/entities/negociacion/negociacion.domain-entity';
import { INegociacionDomainEntityInterface } from '../../../domain/entities/interfaces/negociacion/negociacion.domain-entity.interface';
import { TipoNegociacionValueObject } from '../../../domain/value-objects/tipo-negociacion/tipo-negociacion.value-object';



export class ModificarTipoNegociacionUseCase  extends ValueObjectErrorHandler
implements IUseCase<IModificarTipoNegociacionCommands, ITipoNegociacionModificadoResponse> {
    
    private readonly aggregateRoot:StaffDeportivoAggregate;

    constructor(
        private readonly staffDeportivoService: IStaffDeportivoDomainService,
        private readonly negociacionTipoNegociacionModificadoEvent : TipoDeNegociacionModificadoEventPublisher,
    ){
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,negociacionTipoNegociacionModificadoEvent});
    }


    async execute(command?: IModificarTipoNegociacionCommands): Promise<ITipoNegociacionModificadoResponse> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }
    }

    //Crea todo lo que tiene el comando con los value Object 
    private async executeCommand(command: IModificarTipoNegociacionCommands): Promise<NegociacionDomainEntity | null> {

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
    private createValueObject(command: IModificarTipoNegociacionCommands): INegociacionDomainEntityInterface {

        
        const negociacionId = new IdValueObject(command.negociacionId);
        const tipoNegociacion= new TipoNegociacionValueObject(command.tipoNegociacion);

        return {
            negociacionId,
            tipoNegociacion,
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: INegociacionDomainEntityInterface): void {

        const {
            negociacionId,
            tipoNegociacion,
        } = valueObject

        if (negociacionId instanceof IdValueObject && negociacionId.hasErrors())
            this.setErrors(negociacionId.getErrors());
        
        if (tipoNegociacion instanceof TipoNegociacionValueObject && tipoNegociacion.hasErrors())
            this.setErrors(tipoNegociacion.getErrors());


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
            tipoNegociacion,
            
        } = valueObject

        return new NegociacionDomainEntity({
            negociacionId : negociacionId,
            tipoNegociacion: tipoNegociacion,
        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueStaffDeportivoAggregateRoot(
        entity: NegociacionDomainEntity,
    ): Promise<NegociacionDomainEntity | null> {
        return  this.aggregateRoot.NegociacionModificarTipoNegociacion(entity)
    }
}


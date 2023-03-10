import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { StaffDeportivoAggregate, IStaffDeportivoDomainService, NombreValueObject, EmpleadoDomainEntity, INombreModificadoResponse, IEmpleadoDomainEntity, IdValueObject, IModificarTipoEmpleadoCommands, ITipoEmpleadoModificadoResponse, TipoEmpleadoValueObject } from "../../../domain";
import { NombreModificadoEventPublisher } from '../../../domain/events/publishers/empleado/nombre-modificado.event-publisher';
import { IModificarNombreCommands } from '../../../domain/interfaces/commands/empleado/modificar-nombre.commands';
import { EmpleadoBuscadoEventPublisher } from "../../../domain/events/publishers/staff-deporitvo/empleado-buscado.event-publisher";
import { TipoEmpleadoModificadoEventPublisher } from '../../../domain/events/publishers/empleado/tipo-empleado-modificado';

export class ModificarTipoEmpleadoUseCase 
    extends ValueObjectErrorHandler
    implements IUseCase<IModificarTipoEmpleadoCommands, ITipoEmpleadoModificadoResponse> {
        
        private readonly aggregateRoot:StaffDeportivoAggregate;

        constructor(
            private readonly staffDeportivoService: IStaffDeportivoDomainService,
            private readonly tipoEmpleadoModificadoEvent : TipoEmpleadoModificadoEventPublisher,
            private readonly empleadoBuscadoEvent : EmpleadoBuscadoEventPublisher,
        ){
            super();
            this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,tipoEmpleadoModificadoEvent});
        }
   

    async execute(command?: IModificarTipoEmpleadoCommands): Promise<ITipoEmpleadoModificadoResponse> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }
    }

    //Crea todo lo que tiene el comando con los value Object 
    private async executeCommand(command: IModificarTipoEmpleadoCommands): Promise<EmpleadoDomainEntity | null> {

        //Llamada a la funcion que crea lso value object 
        const ValueObject = this.createValueObject(command);

        //Llama para validar los value object 
        this.validateValueObject(ValueObject);

        //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
        const entity = this.createEntityClientDomain(ValueObject);

        //Llama a la funcion que se conecta con el servicio del agregado 
        return this.exectueOrderAggregateRoot(entity)
    }

    //Crea los value Object 
    private createValueObject(command: IModificarTipoEmpleadoCommands): IEmpleadoDomainEntity {

        
        const empleadoId = new IdValueObject(command.empleadoid);

        const tipoEmpleado = new TipoEmpleadoValueObject(command.tipoEmpelado);

        return {
            empleadoId,
            tipoEmpleado,
        }
    }

    //Valida los value object
    private validateValueObject(valueObject: IEmpleadoDomainEntity): void {

        const {
            empleadoId,
            tipoEmpleado,
        } = valueObject

        if ( empleadoId instanceof IdValueObject && empleadoId.hasErrors())
            this.setErrors(empleadoId.getErrors());
        
        if ( tipoEmpleado instanceof TipoEmpleadoValueObject && tipoEmpleado.hasErrors())
            this.setErrors(tipoEmpleado.getErrors());


        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    //Crea la entidad en si
    private createEntityClientDomain(
        valueObject: IEmpleadoDomainEntity
    ): EmpleadoDomainEntity {

        const {
            empleadoId,
            tipoEmpleado,
            
        } = valueObject

        return new EmpleadoDomainEntity({
            empleadoId : empleadoId.valueOf(),
            nombre: tipoEmpleado.valueOf(),
        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueOrderAggregateRoot(
        entity: EmpleadoDomainEntity,
    ): Promise<EmpleadoDomainEntity | null> {
        return this.aggregateRoot.modificarTipoEmpleado(entity)
    }
}

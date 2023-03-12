import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { ICrearStaffDeportivoCommands, IStaffDeportivoCreadoResponse, StaffDeportivoAggregate, IStaffDeportivoDomainService, StaffDeportivoCreadoEventPublisher, IdValueObject, NombreValueObject, StaffDeportivoDomainEntity } from "../../../domain";
import { EmpleadoBuscadoEventPublisher } from "../../../domain/events/publishers/staff-deporitvo/empleado-buscado.event-publisher";
import { TramiteBuscadoEventPublisher } from "../../../domain/events/publishers/staff-deporitvo/tramite-buscado.event-publisher";
import { BuscarTramiteUseCase, BuscarEmpleadoUseCase } from "../staff-deportivo";
import { ICrearSecretariaCommands } from '../../../domain/interfaces/commands/secretaria/crear-secretaria.commands.interface';
import { ISecretariaCreadaResponse } from '../../../domain/interfaces/responses/secretaria/secretaria-creada.response.interface';
import { secretariaCreadaEventPublisher } from '../../../domain/events/publishers/secretaria/secretaria-creada.event-publisher';
import { ISecretariaDomainService } from '../../../domain/services/secretaria/secretaria.domain-service';
import { SecretariaAggregate } from '../../../domain/aggregates/secretaria/secretaria.aggregate';

export class CrearSecretariaUseCase extends ValueObjectErrorHandler
implements IUseCase<ICrearSecretariaCommands, ISecretariaCreadaResponse> {
    
    private readonly aggregateRoot: SecretariaAggregate;

    constructor(
        private readonly secretariaService: ISecretariaDomainService,
        private readonly secretariaCreadaEvent : secretariaCreadaEventPublisher,
    ){
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,staffDeportivoCreadoEvent,tamiteBuscadoEvent,empleadoBuscadoEvent});
    }

async execute(command: ICrearSecretariaCommands): Promise<ISecretariaCreadaResponse> {

    //Creo los value object 
    const staffDeportivoId = new IdValueObject(command.staffDeportivoId);
    const nombre = new NombreValueObject(command.nombre);


    // Recopilando errores
    if (staffDeportivoId.hasErrors() === true) this.setErrors(staffDeportivoId.getErrors());

    if (nombre.hasErrors() === true) this.setErrors(nombre.getErrors());

    // Validando errores
    if (this.hasErrors() === true)
        throw new ValueObjectException(
        'Errores en el comando "ICrearStaffDeportivoCommand"',
        this.getErrors(),
        );
        
    const obtenerTramite = new BuscarTramiteUseCase(this.staffDeportivoService,this.tamiteBuscadoEvent);
    const obtnerEmpleado = new BuscarEmpleadoUseCase(this.staffDeportivoService,this.empleadoBuscadoEvent);
   
    // Ejecución de la lógica del caso de uso
    const entity = new StaffDeportivoDomainEntity({
       
        staffDeportivoId: staffDeportivoId.valueOf(),
        nombre: nombre.valueOf(),
        tramite: (await obtenerTramite.execute({tramiteId: command.tamite})).data ,
        empleado: (await obtnerEmpleado.execute({empleadoId : command.empleado})).data,
        
    });
    const result = await this.aggregateRoot.CrearStaffDeportivo(entity);//Se le puede pasar directamente la entidad como tambien se le pude pasar la interface 

    // Retornando la respuesta
    return { success: true,data: result };

}


}
{}

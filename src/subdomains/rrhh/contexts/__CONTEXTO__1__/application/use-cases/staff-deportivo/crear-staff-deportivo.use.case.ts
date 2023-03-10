import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { StaffDeportivoAggregate } from '../../../domain/aggregates/staff-deportivo/staff-deportivo.aggregate';
import { IStaffDeportivoCreadoResponse } from '../../../domain/interfaces/responses/staff-deportivo/staff-deportivo-creado.response';
import { ICrearStaffDeportivoCommands } from '../../../domain/interfaces';
import { IStaffDeportivoDomainService } from '../../../domain/services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoCreadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { StaffDeportivoDomainEntity } from '../../../domain/entities/staff-deportivo/staff-deportivo.entity';
import { EmpleadoDomainEntity } from '../../../domain/entities/empleado/EmpleadoDomainEntity';
import { NombreValueObject } from '../../../domain/value-objects/nombre/nombre.value-object';
import { ValueObjectException } from 'src/libs';
import { TramiteBuscadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/tramite-buscado.event-publisher';
import { EmpleadoBuscadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/empleado-buscado.event-publisher';
import { GetTramiteUseCase } from './buscar-tramite.use-case';

export class CrearStaffDeportivoUseCase 
    extends ValueObjectErrorHandler
    implements IUseCase<ICrearStaffDeportivoCommands, IStaffDeportivoCreadoResponse> {
        
        private readonly aggregateRoot:StaffDeportivoAggregate;

        constructor(
            private readonly staffDeportivoService: IStaffDeportivoDomainService,
            private readonly staffDeportivoCreadoEvent : StaffDeportivoCreadoEventPublisher,
            private readonly tamiteBuscadoEvent : TramiteBuscadoEventPublisher,
            private readonly empleadoBuscadoEvent : EmpleadoBuscadoEventPublisher,
        ){
            super();
            this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,staffDeportivoCreadoEvent,tamiteBuscadoEvent,empleadoBuscadoEvent});
        }
   
    async execute(command: ICrearStaffDeportivoCommands): Promise<IStaffDeportivoCreadoResponse> {


        const nombre = new NombreValueObject(command.nombre);

    
        // Recopilando errores
        if (nombre.hasErrors() === true) this.setErrors(nombre.getErrors());
    
        // Validando errores
        if (this.hasErrors() === true)
            throw new ValueObjectException(
            'Errores en el comando "ICrearStaffDeportivoCommand"',
            this.getErrors(),
            );
            
        const getTramite = new GetTramiteUseCase(this.staffDeportivoService,this.tamiteBuscadoEvent);
        getTramite.execute({tramiteId: command.tamite})
       
        // Ejecución de la lógica del caso de uso
        const entity = new StaffDeportivoDomainEntity({
           

            nombre: nombre.valueOf(),
            tramite: ,
            empleado: new EmpleadoDomainEntity(),
            
        });
        const result = await this.aggregateRoot.CrearStaffDeportivo(entity);//Se le puede pasar directamente la entidad como tambien se le pude pasar la interface 
    
        // Retornando la respuesta
        return { success: true,data: result };

    }


    }

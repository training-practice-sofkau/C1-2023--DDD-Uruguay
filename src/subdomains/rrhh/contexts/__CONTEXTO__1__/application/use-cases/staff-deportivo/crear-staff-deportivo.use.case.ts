import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { StaffDeportivoAggregate } from '../../../domain/aggregates/staff-deportivo/staff-deportivo.aggregate';
import { IStaffDeportivoCreadoResponse } from '../../../domain/interfaces/responses/staff-deportivo/staff-deportivo-creado.response';
import { ICrearStaffDeportivoCommands } from '../../../domain/interfaces';
import { IStaffDeportivoDomainService } from '../../../domain/services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoCreadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { StaffDeportivoDomainEntity } from '../../../domain/entities/staff-deportivo/staff-deportivo.entity';
import { IdValueObject } from '../../../domain/value-objects/id/id.value-object';
import { EmpleadoDomainEntity } from '../../../domain/entities/empleado/EmpleadoDomainEntity';
import { NombreValueObject } from '../../../domain/value-objects/nombre/nombre.value-object';
import { ValueObjectException } from 'src/libs';
import { TramiteDomainEntity } from '../../../domain/entities/tramite/tramite.entity.interface';

export class CrearStaffDeportivoUseCase 
    extends ValueObjectErrorHandler
    implements IUseCase<ICrearStaffDeportivoCommands, IStaffDeportivoCreadoResponse> {
        
        private readonly aggregateRoot:StaffDeportivoAggregate;

        constructor(
            private readonly staffDeportivoService: IStaffDeportivoDomainService,
            private readonly staffDeportivoCreadoEvent : StaffDeportivoCreadoEventPublisher,
        ){
            super();
            this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,staffDeportivoCreadoEvent});
        }
   
    async execute(command: ICrearStaffDeportivoCommands): Promise<IStaffDeportivoCreadoResponse> {


        const staffDeportivoId = new IdValueObject(command.staffDeportivoId) ;
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

        // Ejecución de la lógica del caso de uso
        const entity = new StaffDeportivoDomainEntity({
            staffDeportivoId: staffDeportivoId.valueOf(),
            nombre: nombre.valueOf(),
            tramite: new TramiteDomainEntity(),
            empleado: new EmpleadoDomainEntity(),
            
        });
        const result = await this.aggregateRoot.CrearStaffDeportivo(entity);//Se le puede pasar directamente la entidad como tambien se le pude pasar la interface 
    
        // Retornando la respuesta
        return { success: true,data: result };

    }


    }

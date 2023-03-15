import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { SalarioModificadoEventPublisher } from '../../../events/publishers';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { AggregateRootException } from 'src/libs';

export const  ModificarSalarioEmpleadoHelper = async (
    empleadoId:string,
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: SalarioModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

    const result = await service.modificarSalario(empleadoId,entity);
    event.response = result;
    event.publish();
    return result;

}
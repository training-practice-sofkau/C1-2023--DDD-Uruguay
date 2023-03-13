import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { AggregateRootException } from 'src/libs';
import { TipoEmpleadoModificadoEventPublisher } from '../../../events/publishers/empleado/tipo-empleado-modificado';
export const  ModificarTipoEmpleadoHelper = async (
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: TipoEmpleadoModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

    const result = await service.modificarTipoEmpleado(entity);
    event.response = result;
    event.publish();
    return result;

}
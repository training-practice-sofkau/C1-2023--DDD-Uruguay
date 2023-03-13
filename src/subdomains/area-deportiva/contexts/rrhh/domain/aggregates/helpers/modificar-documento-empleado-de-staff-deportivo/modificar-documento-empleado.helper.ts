import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { AggregateRootException } from 'src/libs';
import { DocumentoModificadoEventPublisher } from '../../../events';
export const  ModificarDocumentoEmpleadoHelper = async (
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: DocumentoModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

    const result = await service.modificarDocumento(entity);
    event.response = result;
    event.publish();
    return result;

}

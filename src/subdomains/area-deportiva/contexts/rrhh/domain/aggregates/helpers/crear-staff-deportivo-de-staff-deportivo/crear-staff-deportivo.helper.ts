import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';
import { IStaffDeportivoDomainService } from '../../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoCreadoEventPublisher } from '../../../events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { AggregateRootException } from 'src/libs';

export const  CrearStaffDeportivoHelper = async (
    entity: StaffDeportivoDomainEntity,
    service?: IStaffDeportivoDomainService,
    event?: StaffDeportivoCreadoEventPublisher,
):Promise<StaffDeportivoDomainEntity> => {
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event)
    throw new AggregateRootException('Evento creador de Staff Deportivo indefinido')

    const result = await service.CrearStaffDeportivo(entity);
    event.response = result;
    event.publish();
    return result;
}

import { TramiteAgregadoEventPublisher } from '../../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';
import { IStaffDeportivoDomainService } from '../../../services';
import { AggregateRootException } from 'src/libs';

export const  CrearTramiteHelper = async (
    entity: TramiteDomainEntity,
    service?: IStaffDeportivoDomainService,
    event?: TramiteAgregadoEventPublisher,
):Promise<TramiteDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

    const result = await service.CrearTramite(entity);
    event.response = result;
    event.publish();
    return result;
}
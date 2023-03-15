import { ITramiteDomainService } from '../../../services/staff-Deportivo/tramite.domain-service';
import { FechaTramiteModificadaEventPublisher } from '../../../events/publishers/staff-deporitvo/fecha-tramite-modificada.event-publisher';
import { AggregateRootException } from 'src/libs';
import { TramiteDomainEntity } from '../../../entities';

export const ModificarFechaTramiteHelper = async (
    tramiteId:string,
    entity: TramiteDomainEntity,
    service?: ITramiteDomainService,
    event?: FechaTramiteModificadaEventPublisher,
):Promise<TramiteDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio tramite indefinido')

    if(!event) throw new AggregateRootException('Evento modificar fecha de tramite indefinido');

    const result = await service.ModificarFecha(tramiteId,entity);
    event.response = result;
    event.publish();
    return result;

}

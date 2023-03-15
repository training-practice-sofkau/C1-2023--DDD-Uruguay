import { AggregateRootException } from "src/libs";
import { TramiteDomainEntity } from "../../../entities";
import { TramiteBuscadoEventPublisher } from '../../../events/publishers/staff-deporitvo/tramite-buscado.event-publisher';
import { ITramiteDomainService } from '../../../services/staff-Deportivo/tramite.domain-service';

export const BuscarTramiteHelper = async (
    tramiteId: string,
    service?: ITramiteDomainService,
    event?: TramiteBuscadoEventPublisher,
):Promise<TramiteDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento buscar tramite indefinido');

    const result = await service.BuscarTramite(tramiteId);
    event.response = result;
    event.publish();
    return result;

}
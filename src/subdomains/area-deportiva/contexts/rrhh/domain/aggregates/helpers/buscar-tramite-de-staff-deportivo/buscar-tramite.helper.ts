import { AggregateRootException } from "src/libs";
import { TramiteDomainEntity } from "../../../entities";
import { IStaffDeportivoDomainService } from '../../../services/staff-Deportivo/staff-deportivo.domain-service';
import { TramiteBuscadoEventPublisher } from '../../../events/publishers/staff-deporitvo/tramite-buscado.event-publisher';

export const BuscarTramiteHelper = async (
    entity: TramiteDomainEntity,
    service?: IStaffDeportivoDomainService,
    event?: TramiteBuscadoEventPublisher,
):Promise<TramiteDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento buscar tramite indefinido');

    const result = await service.BuscarTramite(entity);
    event.response = result;
    event.publish();
    return result;

}
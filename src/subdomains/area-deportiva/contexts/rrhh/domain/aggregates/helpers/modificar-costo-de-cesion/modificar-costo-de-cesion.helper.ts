import { AggregateRootException } from 'src/libs';
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { ICesionDomainService } from '../../../services/secretaria/cesion.domain-service';
import { CostoModificadoEventPublisher } from '../../../events/publishers/cesion/costo-modificado.event-publisher';
export const  ModificarCostoDeCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ICesionDomainService,
    event?: CostoModificadoEventPublisher,
):Promise<CesionDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Cesion indefinido')

    if(!event) throw new AggregateRootException('Evento modificar costo de cesion indefinido');

    const result = await service.CesionModificarCosto(entity);
    event.response = result;
    event.publish();
    return result;

}
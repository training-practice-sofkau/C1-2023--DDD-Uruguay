import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { CesionBuscadaEventPublisher } from '../../../events/publishers/secretaria/cesion-buscada.event-publisher';
import { AggregateRootException } from 'src/libs';

export const BuscarCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ISecretariaDomainService,
    event?: CesionBuscadaEventPublisher,
):Promise<CesionDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar cesion indefinido');

    const result = await service.BuscarCesion(entity);
    event.response = result;
    event.publish();
    return result;

}

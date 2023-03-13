
import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { TraspasoDomainEntity } from '../../../entities';
import { TraspasoBuscadaEventPublisher } from '../../../events/publishers/secretaria/traspaso-buscado.event-publisher';

export const BuscarTraspasoHelper = async (
    entity: TraspasoDomainEntity,
    service?: ISecretariaDomainService,
    event?: TraspasoBuscadaEventPublisher,
):Promise<TraspasoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar traspaso indefinido');

    const result = await service.BuscarTraspaso(entity);
    event.response = result;
    event.publish();
    return result;

}
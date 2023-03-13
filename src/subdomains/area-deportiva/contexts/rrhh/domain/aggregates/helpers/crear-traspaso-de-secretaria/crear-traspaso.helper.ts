import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { TraspasoDomainEntity } from '../../../entities';
import { TraspasoNegociadoEventPublisher } from '../../../events/publishers/secretaria/traspaso-negociado.event-publisher';

export const CrearTraspasoHelper = async (
    entity: TraspasoDomainEntity,
    service?: ISecretariaDomainService,
    event?: TraspasoNegociadoEventPublisher,
):Promise<TraspasoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar traspaso indefinido');

    const result = await service.NegociarTraspaso(entity);
    event.response = result;
    event.publish();
    return result;

}
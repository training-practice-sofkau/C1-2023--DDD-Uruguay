
import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { TraspasoDomainEntity } from '../../../entities';
import { TraspasoBuscadaEventPublisher } from '../../../events/publishers/secretaria/traspaso-buscado.event-publisher';
import { ITraspasoDomainService } from '../../../services/secretaria/traspaso.domain-service';

export const BuscarTraspasoHelper = async (
    traspasoId: string,
    service?: ITraspasoDomainService,
    event?: TraspasoBuscadaEventPublisher,
):Promise<TraspasoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar traspaso indefinido');

    const result = await service.BuscarTraspaso(traspasoId);
    event.response = result;
    event.publish();
    return result;

}
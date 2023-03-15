import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { SecretariaDomainEntity } from '../../../entities/secretaria/secretaria.domain-entity';
import { secretariaCreadaEventPublisher } from '../../../events/publishers/secretaria/secretaria-creada.event-publisher';

export const CrearSecretariaHelper = async (
    entity: SecretariaDomainEntity,
    service?: ISecretariaDomainService,
    event?: secretariaCreadaEventPublisher,
):Promise<SecretariaDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento crear secretaria indefinido');

    const result = await service.CrearSecretaria(entity);
    event.response = result;
    event.publish();
    return result;

}
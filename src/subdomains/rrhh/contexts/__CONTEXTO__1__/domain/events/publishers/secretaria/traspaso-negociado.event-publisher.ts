import { EventPublisherBase } from 'src/libs';
import { SecretariaDomainEntity } from '../../../entities/secretaria/secretaria.domain-entity';
export  abstract class TraspasoNegociadoEventPublisher extends EventPublisherBase<SecretariaDomainEntity> {}

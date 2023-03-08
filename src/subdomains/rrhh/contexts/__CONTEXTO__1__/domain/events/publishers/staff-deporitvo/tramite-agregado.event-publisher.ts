import { EventPublisherBase } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';
import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export abstract class TramiteAgregadoEventPublisher  extends EventPublisherBase<TramiteDomainEntity> {}

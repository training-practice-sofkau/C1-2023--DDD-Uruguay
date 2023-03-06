import { EventPublisherBase } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export abstract class DirectivaModificadoEventPublisher extends EventPublisherBase<StaffDeportivoDomainEntity>  {}

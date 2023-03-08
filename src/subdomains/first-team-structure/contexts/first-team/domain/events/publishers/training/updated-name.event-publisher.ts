import { EventPublisherBase } from 'src/libs';
import { TrainingDomainEntity } from '../../../entities/training.domain-entity';
export abstract class UpdatedNameEventPublisher extends EventPublisherBase<TrainingDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-name',
            JSON.stringify({ data: this.response })
        )
    }
}
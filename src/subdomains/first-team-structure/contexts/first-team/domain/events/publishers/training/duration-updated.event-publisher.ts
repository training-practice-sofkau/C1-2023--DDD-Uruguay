import { EventPublisherBase } from "src/libs";
import { TrainingDomainEntity } from '../../../entities/training.domain-entity';

export abstract class UpdatedDurationEventPublisher extends EventPublisherBase<TrainingDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-duration',
            JSON.stringify({ data: this.response })
        )
    }
}
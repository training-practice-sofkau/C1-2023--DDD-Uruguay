import { EventPublisherBase } from "src/libs";
import { TrainingDomainEntity } from '../../../entities/training.domain-entity';

export abstract class GotTrainingIdEventPublisher extends EventPublisherBase<TrainingDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-training-id',
            JSON.stringify({ data: this.response })
        )
    }
}
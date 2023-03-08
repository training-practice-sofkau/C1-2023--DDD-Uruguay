import { EventPublisherBase } from 'src/libs';
import { TrainingDomainEntity } from '../../../entities/training.domain-entity';
export abstract class RegisteredTrainingEventPublisher extends EventPublisherBase<TrainingDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.registered-training',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from 'src/libs';
import { TrainingEquipmentDomainEntity } from '../../../entities';
export abstract class AddedTrainingEquipmentEventPublisher extends EventPublisherBase<TrainingEquipmentDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-training-equipment',
            JSON.stringify({ data: this.response })
        )
    }
}
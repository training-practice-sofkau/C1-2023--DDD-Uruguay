import { EventPublisherBase } from "src/libs";
import { TrainingEquipmentDomainEntity } from '../../../entities/training/training-equipment.domain-entity';

export abstract class GotTrainingEquipmentIdEventPublisher extends EventPublisherBase<TrainingEquipmentDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-training-equipment-id',
            JSON.stringify({ data: this.response })
        )
    }
}
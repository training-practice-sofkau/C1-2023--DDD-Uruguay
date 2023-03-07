import { EventPublisherBase } from "src/libs";
import { TrainingEquipmentDomainEntity } from "../../../entities";

export abstract class UpdatedTrainingEquipmentTypeEventPublisher extends EventPublisherBase<TrainingEquipmentDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-training-equipment-type',
            JSON.stringify({ data: this.response })
        )
    }
}
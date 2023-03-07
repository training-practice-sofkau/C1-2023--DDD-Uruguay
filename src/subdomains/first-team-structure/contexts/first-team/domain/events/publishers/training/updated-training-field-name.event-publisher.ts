import { EventPublisherBase } from "src/libs";
import { TrainingFieldDomainEntity } from "../../../entities";

export abstract class UpdatedTrainingFieldNameEventPublisher extends EventPublisherBase<TrainingFieldDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-training-field-name',
            JSON.stringify({ data: this.response })
        )
    }
}
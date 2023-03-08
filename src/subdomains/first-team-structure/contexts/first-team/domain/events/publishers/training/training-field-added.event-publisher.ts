import { EventPublisherBase } from "src/libs";
import { TrainingFieldDomainEntity } from "../../../entities";

export abstract class AddedTrainingFieldEventPublisher extends EventPublisherBase<TrainingFieldDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-training-field',
            JSON.stringify({ data: this.response })
        )
    }
}
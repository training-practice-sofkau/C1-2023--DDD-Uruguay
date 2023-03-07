import { EventPublisherBase } from "src/libs";
import { TrainingFieldDomainEntity } from "../../../entities";

export abstract class GotTrainingFieldIdEventPublisher extends EventPublisherBase<TrainingFieldDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-training-field-id',
            JSON.stringify({ data: this.response })
        )
    }
}
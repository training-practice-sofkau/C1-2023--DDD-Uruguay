import { EventPublisherBase } from "src/libs";
import { TrainerDomainEntity } from "../../../entities";

export abstract class UpdatedTrainerSpecialtyEventPublisher extends EventPublisherBase<TrainerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-trainer-specialty',
            JSON.stringify({ data: this.response })
        )
    }
}
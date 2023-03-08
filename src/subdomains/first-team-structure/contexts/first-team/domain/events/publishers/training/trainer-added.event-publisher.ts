import { EventPublisherBase } from "src/libs";
import { TrainerDomainEntity } from "../../../entities";

export abstract class AddedTrainerEventPublisher extends EventPublisherBase<TrainerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-trainer',
            JSON.stringify({ data: this.response })
        )
    }
}
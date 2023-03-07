import { EventPublisherBase } from "src/libs";
import { TrainerDomainEntity } from "../../../entities";

export abstract class GotTrainerIdEventPublisher extends EventPublisherBase<TrainerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-trainer-id',
            JSON.stringify({ data: this.response })
        )
    }
}
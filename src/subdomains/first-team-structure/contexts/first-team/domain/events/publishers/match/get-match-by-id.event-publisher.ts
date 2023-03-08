import { EventPublisherBase } from "src/libs";
import { MatchDomainEntity } from "../../../entities";

export abstract class GotTrainerIdEventPublisher extends EventPublisherBase<MatchDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-trainer',
            JSON.stringify({ data: this.response })
        )
    }
}
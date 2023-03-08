import { EventPublisherBase } from "src/libs";
import { MatchDomainEntity } from "../../../entities";

export abstract class RegisteredMatchEventPublisher extends EventPublisherBase<MatchDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.registered-match',
            JSON.stringify({ data: this.response })
        )
    }
}
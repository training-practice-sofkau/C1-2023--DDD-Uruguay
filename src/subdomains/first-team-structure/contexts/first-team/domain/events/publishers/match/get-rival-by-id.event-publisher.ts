import { EventPublisherBase } from "src/libs";
import { RivalDomainEntity } from "../../../entities";

export abstract class GotRivalIdEventPublisher extends EventPublisherBase<RivalDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-rival-id',
            JSON.stringify({ data: this.response })
        )
    }
}
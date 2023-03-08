import { EventPublisherBase } from "src/libs";
import { PlayerDomainEntity } from "../../../entities";

export abstract class GotPlayerIdEventPublisher extends EventPublisherBase<PlayerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-player-id',
            JSON.stringify({ data: this.response })
        )
    }
}
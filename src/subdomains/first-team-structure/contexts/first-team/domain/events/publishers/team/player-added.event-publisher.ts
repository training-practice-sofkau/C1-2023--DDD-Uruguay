import { EventPublisherBase } from "src/libs";
import { PlayerDomainEntity } from "../../../entities";

export abstract class AddedPlayerEventPublisher extends EventPublisherBase<PlayerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-player',
            JSON.stringify({ data: this.response })
        )
    }
}
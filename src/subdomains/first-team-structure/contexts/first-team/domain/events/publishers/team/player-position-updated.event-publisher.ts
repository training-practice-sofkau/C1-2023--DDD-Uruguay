import { EventPublisherBase } from "src/libs";
import { PlayerDomainEntity } from "../../../entities";

export abstract class UpdatedPlayerPositionEventPublisher extends EventPublisherBase<PlayerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-player-position',
            JSON.stringify({ data: this.response })
        )
    }
}
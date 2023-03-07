import { EventPublisherBase } from "src/libs";
import { PlayerDomainEntity } from "../../../entities";

export abstract class UpdatedPlayerWageEventPublisher extends EventPublisherBase<PlayerDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-player-wage',
            JSON.stringify({ data: this.response })
        )
    }
}
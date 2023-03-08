import { EventPublisherBase } from "src/libs";
import { RivalDomainEntity } from "../../../entities";

export abstract class AddedRivalEventPublisher extends EventPublisherBase<RivalDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-rival',
            JSON.stringify({ data: this.response })
        )
    }
}
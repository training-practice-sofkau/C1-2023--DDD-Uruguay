import { EventPublisherBase } from "src/libs";
import { RivalDomainEntity } from "../../../entities";

export abstract class UpdatedRivalTownEventPublisher extends EventPublisherBase<RivalDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-rival-town',
            JSON.stringify({ data: this.response })
        )
    }
}
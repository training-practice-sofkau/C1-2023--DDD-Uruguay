import { EventPublisherBase } from "src/libs";
import { StadiumDomainEntity } from "../../../entities";

export abstract class GotStadiumIdEventPublisher extends EventPublisherBase<StadiumDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-stadium-id',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs";
import { StadiumDomainEntity } from "../../../entities";
import { IAddedStadiumResponse } from "../../../interfaces/responses/match/stadium-added.response";

export abstract class AddedStadiumEventPublisher extends EventPublisherBase<StadiumDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-stadium',
            JSON.stringify({ data: this.response })
        )
    }
}
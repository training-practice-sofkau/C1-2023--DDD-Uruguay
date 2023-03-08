import { EventPublisherBase } from "src/libs";
import { StadiumDomainEntity } from "../../../entities";
import { IUpdatedStadiumCapacityResponse } from '../../../interfaces/responses/match/stadium-capacity-updated.response';

export abstract class UpdatedStadiumCapacityEventPublisher extends EventPublisherBase<StadiumDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-stadium-capacity',
            JSON.stringify({ data: this.response })
        )
    }
}
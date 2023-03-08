import { EventPublisherBase } from "src/libs";
import { StadiumDomainEntity } from "../../../entities";
import { IUpdatedStadiumSquareMetersResponse } from '../../../interfaces/responses/match/stadium-square-meters-updated.response';

export abstract class UpdatedStadiumSquareMetersEventPublisher extends EventPublisherBase<StadiumDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-stadium-square-meters',
            JSON.stringify({ data: this.response })
        )
    }
}
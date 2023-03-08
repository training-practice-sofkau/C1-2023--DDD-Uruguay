import { EventPublisherBase } from "src/libs";
import { CoachDomainEntity } from "../../../entities";
import { IAddedCoachResponse } from '../../../interfaces/responses/team/coach-added.response';

export abstract class AddedCoachEventPublisher extends EventPublisherBase<CoachDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-coach',
            JSON.stringify({ data: this.response })
        )
    }
}
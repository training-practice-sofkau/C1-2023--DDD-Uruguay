import { EventPublisherBase } from "src/libs";
import { CoachDomainEntity } from "../../../entities";

export abstract class UpdatedCoachWageEventPublisher extends EventPublisherBase<CoachDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-coach-wage',
            JSON.stringify({ data: this.response })
        )
    }
}
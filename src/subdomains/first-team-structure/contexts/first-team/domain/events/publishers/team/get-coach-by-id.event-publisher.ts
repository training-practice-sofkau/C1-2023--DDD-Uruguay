import { EventPublisherBase } from "src/libs";
import { CoachDomainEntity } from "../../../entities";

export abstract class GotCoachIdEventPublisher extends EventPublisherBase<CoachDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-coach-id',
            JSON.stringify({ data: this.response })
        )
    }
}
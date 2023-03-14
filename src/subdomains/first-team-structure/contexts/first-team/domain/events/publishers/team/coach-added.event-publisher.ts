import { EventPublisherBase } from "src/libs";
import { CoachDomainEntity } from "../../../entities";

export abstract class AddedCoachEventPublisher extends EventPublisherBase<CoachDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-coach',
            JSON.stringify({ data: this.response })
        )
    }
}
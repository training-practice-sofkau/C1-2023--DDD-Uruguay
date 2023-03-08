import { EventPublisherBase } from "src/libs";
import { WorkoutDomainEntity } from "../../../entities";

export abstract class AddedWorkoutEventPublisher extends EventPublisherBase<WorkoutDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.added-workout',
            JSON.stringify({ data: this.response })
        )
    }
}
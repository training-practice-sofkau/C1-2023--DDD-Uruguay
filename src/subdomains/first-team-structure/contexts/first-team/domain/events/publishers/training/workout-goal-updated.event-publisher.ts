import { EventPublisherBase } from "src/libs";
import { WorkoutDomainEntity } from "../../../entities";
import { IUpdatedWorkoutGoalResponse } from '../../../interfaces/responses/training/workout-goal-updated.response';

export abstract class UpdatedWorkoutGoalEventPublisher extends EventPublisherBase<WorkoutDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-workout-goal',
            JSON.stringify({ data: this.response })
        )
    }
}
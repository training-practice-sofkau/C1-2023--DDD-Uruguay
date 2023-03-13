import { WorkoutDomainEntity } from "../../../entities";
import { GoalValueObject } from "../../../value-objects";

export interface IUpdatedWorkoutGoalResponse {
    success: boolean;
    data: WorkoutDomainEntity | null;
}
import { GoalValueObject } from "../../../value-objects";

export interface IUpdatedWorkoutGoalResponse {
    success: boolean;
    data: GoalValueObject | null;
}
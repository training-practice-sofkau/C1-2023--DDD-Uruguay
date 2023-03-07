import { GoalValueObject, IdValueObject } from "../../../value-objects";

export interface IUpdateWorkoutGoalCommand {
    workoutId: string | IdValueObject
    goal: string | GoalValueObject
}
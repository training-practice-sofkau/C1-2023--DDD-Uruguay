import { GoalValueObject } from "../../../value-objects";


export interface IUpdateWorkoutGoalCommand {
    workoutId: string,
    goal: string | GoalValueObject
}
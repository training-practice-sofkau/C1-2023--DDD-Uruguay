import { GoalValueObject, IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";

export interface IAddWorkoutCommand {
    workoutId: string | IdValueObject,
    name: string | NameValueObject,
    type: string | TypeValueObject,
    goal: string | GoalValueObject
}
import { GoalValueObject, IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";

/**
 *Workout Interface Entity of Training AR
 *
 * @export
 * @interface IWorkoutDomainEntity
 */
export interface IWorkoutDomainEntity {
    workoutId?: string | IdValueObject,
    name: string | NameValueObject,
    type: string | TypeValueObject,
    goal: string | GoalValueObject
}

import { GoalValueObject, IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";
import { ITrainingDomainEntity } from "../training.domain-entity.interface";

/**
 *Workout Interface Entity of Training AR
 *
 * @export
 * @interface IWorkoutDomainEntity
 */
export interface IWorkoutDomainEntity {
    workoutId?: string | IdValueObject,
    training: ITrainingDomainEntity,
    name: string | NameValueObject,
    type: string | TypeValueObject,
    goal: string | GoalValueObject
}

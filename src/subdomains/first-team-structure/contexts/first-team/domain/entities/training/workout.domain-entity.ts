import { IdValueObject, NameValueObject, TypeValueObject, GoalValueObject } from "../../value-objects";
import { IWorkoutDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Workout Entity of Training AR
 *
 * @export
 * @class WorkoutDomainEntity
 * @implements {IWorkoutDomainEntity}
 */
export class WorkoutDomainEntity implements IWorkoutDomainEntity{
    workoutId: string | IdValueObject;
    name: string | NameValueObject;
    type: string | TypeValueObject;
    goal: string | GoalValueObject;
}

import { IdValueObject, NameValueObject, TypeValueObject, GoalValueObject } from "../../value-objects";
import { IWorkoutDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';
import { TrainingDomainEntity } from "../training.domain-entity";

/**
 *Workout Entity of Training AR
 *
 * @export
 * @class WorkoutDomainEntity
 * @implements {IWorkoutDomainEntity}
 */
export class WorkoutDomainEntity implements IWorkoutDomainEntity{
    workoutId?: string | IdValueObject;
    training: TrainingDomainEntity;
    name: string | NameValueObject;
    type: string | TypeValueObject;
    goal: string | GoalValueObject;

    constructor(data: IWorkoutDomainEntity) {
        if(data.workoutId) this.workoutId = data.workoutId
        else this.workoutId = uuidv4();

        if(data.name) this.name = data.name

        if(data.training) this.training = data.training

        if(data.type) this.type = data.type

        if(data.goal) this.goal = data.goal
    }
}

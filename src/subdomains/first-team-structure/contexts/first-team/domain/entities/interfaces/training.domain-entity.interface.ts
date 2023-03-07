import { DurationValueObject, IdValueObject, NameValueObject } from "../../value-objects";
import { ITeamDomainEntity, ITrainerDomainEntity, ITrainingEquipmentDomainEntity, ITrainingFieldDomainEntity, IWorkoutDomainEntity } from "./";

/**
 *Interface of Training Aggregate Entity
 *
 * @export
 * @interface ITrainingDomainEntity
 */
export interface ITrainingDomainEntity {
    trainingId: string | IdValueObject,
    duration: number | DurationValueObject,
    team: ITeamDomainEntity,
    trainingEquipments: Array<ITrainingEquipmentDomainEntity>,
    trainingField: ITrainingFieldDomainEntity,
    name: string | NameValueObject,
    trainer: ITrainerDomainEntity,
    workouts: Array<IWorkoutDomainEntity>
}

import { ITeamDomainEntity, ITrainerDomainEntity, ITrainingEquipmentDomainEntity, ITrainingFieldDomainEntity, IWorkoutDomainEntity } from "../../../entities";
import { DurationValueObject, IdValueObject, NameValueObject } from "../../../value-objects";

export interface IRegisterTrainingCommand {
    trainingId: string | IdValueObject,
    duration: number | DurationValueObject,
    team: ITeamDomainEntity,
    trainingEquipments: Array<ITrainingEquipmentDomainEntity>,
    trainingField: ITrainingFieldDomainEntity,
    name: string | NameValueObject,
    trainer: ITrainerDomainEntity,
    workouts: Array<IWorkoutDomainEntity>
}
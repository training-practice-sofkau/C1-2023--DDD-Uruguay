import { DurationValueObject, IdValueObject, NameValueObject } from "../../value-objects";
import { ITeamDomainEntity, ITrainerDomainEntity, ITrainingFieldDomainEntity } from "./";

/**
 *Interface of Training Aggregate Entity
 *
 * @export
 * @interface ITrainingDomainEntity
 */
export interface ITrainingDomainEntity {
    trainingId?: string | IdValueObject,
    duration: number | DurationValueObject,
    team: ITeamDomainEntity,
    trainingField: ITrainingFieldDomainEntity,
    name: string | NameValueObject,
    trainer: ITrainerDomainEntity,
}

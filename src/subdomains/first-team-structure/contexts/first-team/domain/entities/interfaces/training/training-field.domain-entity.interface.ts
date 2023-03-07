import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

/**
 *Training Field Interface Entity of Training AR
 *
 * @export
 * @interface ITrainingFieldDomainEntity
 */
export interface ITrainingFieldDomainEntity {
    trainingFieldId: string | IdValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}

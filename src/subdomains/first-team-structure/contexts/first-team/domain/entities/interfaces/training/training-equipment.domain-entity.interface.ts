import { IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";

/**
 *Training Equipment Interface Entity of Training AR
 *
 * @export
 * @interface ITrainingEquipmentDomainEntity
 */
export interface ITrainingEquipmentDomainEntity {
    trainingEquipmentId?: string | IdValueObject,
    name: string | NameValueObject,
    type: string | TypeValueObject
}

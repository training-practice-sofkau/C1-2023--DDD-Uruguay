import { IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";
import { ITrainingDomainEntity } from "../training.domain-entity.interface";

/**
 *Training Equipment Interface Entity of Training AR
 *
 * @export
 * @interface ITrainingEquipmentDomainEntity
 */
export interface ITrainingEquipmentDomainEntity {
    trainingEquipmentId?: string | IdValueObject,
    training: ITrainingDomainEntity,
    name: string | NameValueObject,
    type: string | TypeValueObject
}

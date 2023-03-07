import { IdValueObject, NameValueObject, TypeValueObject } from "../../value-objects";
import { ITrainingEquipmentDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Training Equipment Entity of Training AR
 *
 * @export
 * @class TrainingEquipmentDomainEntity
 * @implements {ITrainingEquipmentDomainEntity}
 */
export class TrainingEquipmentDomainEntity implements ITrainingEquipmentDomainEntity{
    trainingEquipmentId: string | IdValueObject;
    name: string | NameValueObject;
    type: string | TypeValueObject;

    constructor(data: ITrainingEquipmentDomainEntity) {
        if(data.trainingEquipmentId) this.trainingEquipmentId = data.trainingEquipmentId
        else this.trainingEquipmentId = uuidv4();

        if(data.name) this.name = data.name

        if(data.type) this.type = data.type
    }
}

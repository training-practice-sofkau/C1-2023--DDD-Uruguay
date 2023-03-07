import { IdValueObject, NameValueObject, TypeValueObject } from "../../../value-objects";

export interface IAddTrainingEquipmentCommand {
    trainingEquipmentId: string | IdValueObject,
    name: string | NameValueObject,
    type: string | TypeValueObject
}
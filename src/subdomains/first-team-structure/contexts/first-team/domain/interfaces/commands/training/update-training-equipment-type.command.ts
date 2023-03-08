import { IdValueObject, TypeValueObject } from "../../../value-objects";

export interface IUpdateTrainingEquipmentTypeCommand {
    trainingEquipmentId: string | IdValueObject
    type: string | TypeValueObject
}
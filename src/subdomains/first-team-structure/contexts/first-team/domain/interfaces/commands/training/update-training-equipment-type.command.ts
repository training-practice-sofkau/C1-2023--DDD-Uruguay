import { TypeValueObject } from "../../../value-objects";

export interface IUpdateTrainingEquipmentTypeCommand {
    trainingEquipmentId: string,
    type: string | TypeValueObject
}
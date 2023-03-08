import { TrainingEquipmentDomainEntity } from "../entities";
import { IUpdateTrainingEquipmentTypeCommand } from "../interfaces";
import { TypeValueObject } from "../value-objects";

export interface ITrainingEquipmentDomainService {
    updateType(type: IUpdateTrainingEquipmentTypeCommand): Promise<TrainingEquipmentDomainEntity | null>
}
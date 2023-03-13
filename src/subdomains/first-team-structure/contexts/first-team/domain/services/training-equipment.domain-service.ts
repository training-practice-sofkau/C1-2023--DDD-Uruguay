import { TrainingEquipmentDomainEntity } from "../entities";
import { IUpdateTrainingEquipmentTypeCommand } from "../interfaces";

export interface ITrainingEquipmentDomainService {
    getTrainingEquipment(id: string[]): Promise<TrainingEquipmentDomainEntity[] | null>;
    updateTrainingEquipmentType(type: IUpdateTrainingEquipmentTypeCommand): Promise<TrainingEquipmentDomainEntity | null>
}
import { TrainingEquipmentDomainEntity } from "../../../entities";

export interface IAddedTrainingEquipmentResponse {
    success: boolean;
    data: TrainingEquipmentDomainEntity | null;
}
import { TrainingEquipmentDomainEntity } from "../../../entities";

export interface IGotTrainingEquipmentsResponse {
    success: boolean;
    data: TrainingEquipmentDomainEntity[] | null;
}
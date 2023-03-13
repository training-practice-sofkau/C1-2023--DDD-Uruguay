import { TrainingEquipmentDomainEntity } from "../../../entities";
import { TypeValueObject } from "../../../value-objects";

export interface IUpdatedTrainingEquipmentTypeResponse {
    success: boolean;
    data: TrainingEquipmentDomainEntity | null;
}
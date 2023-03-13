import { TrainingDomainEntity } from "../../../entities";

export interface IRegisteredTrainingResponse {
    success: boolean;
    data: TrainingDomainEntity | null;
}
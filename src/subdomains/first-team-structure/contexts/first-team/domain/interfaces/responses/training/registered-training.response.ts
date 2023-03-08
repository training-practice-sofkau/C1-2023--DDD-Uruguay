import { TrainingDomainEntity } from "../../../entities";

export interface IRegisteredTrainingResponse {
    success: boolean;
    date: TrainingDomainEntity | null;
}
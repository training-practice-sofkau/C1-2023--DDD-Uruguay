import { TrainingFieldDomainEntity } from "../../../entities";

export interface IGotTrainingFieldResponse {
    success: boolean;
    data: TrainingFieldDomainEntity | null;
}
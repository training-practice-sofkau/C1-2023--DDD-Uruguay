import { TrainingFieldDomainEntity } from "../../../entities";

export interface IAddedTrainingFieldResponse {
    success: boolean;
    data: TrainingFieldDomainEntity | null;
}
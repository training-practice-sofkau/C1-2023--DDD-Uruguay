import { TrainerDomainEntity } from "../../../entities";

export interface IAddedTrainerResponse {
    success: boolean;
    data: TrainerDomainEntity | null;
}
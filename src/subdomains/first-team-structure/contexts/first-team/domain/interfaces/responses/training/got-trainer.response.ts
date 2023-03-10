import { TrainerDomainEntity } from "../../../entities";

export interface IGotTrainerResponse {
    success: boolean;
    data: TrainerDomainEntity | null;
}
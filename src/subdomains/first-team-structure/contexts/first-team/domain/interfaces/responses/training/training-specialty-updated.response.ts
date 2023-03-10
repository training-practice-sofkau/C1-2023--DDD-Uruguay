import { TrainerDomainEntity } from "../../../entities";
import { SpecialtyValueObject } from "../../../value-objects";

export interface IUpdatedTrainerSpecialtyResponse {
    success: boolean;
    data: TrainerDomainEntity | null;
}
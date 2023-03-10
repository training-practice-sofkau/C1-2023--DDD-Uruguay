import { TrainingDomainEntity } from "../../../entities";
import { DurationValueObject } from "../../../value-objects";

export interface IUpdatedDurationResponse {
    success: boolean;
    data: TrainingDomainEntity | null;
}
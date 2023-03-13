import { TrainingDomainEntity } from "../../../entities";
import { NameValueObject } from "../../../value-objects";

export interface IUpdatedNameResponse {
    success: boolean;
    data: TrainingDomainEntity | null;
}
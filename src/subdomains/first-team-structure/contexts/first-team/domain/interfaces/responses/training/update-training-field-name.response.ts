import { TrainingFieldDomainEntity } from "../../../entities";
import { NameValueObject } from "../../../value-objects";

export interface IUpdatedTrainingFieldNameResponse {
    success: boolean;
    data: TrainingFieldDomainEntity | null;
}
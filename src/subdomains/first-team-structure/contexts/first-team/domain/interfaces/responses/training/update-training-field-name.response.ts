import { NameValueObject } from "../../../value-objects";

export interface IUpdatedTrainingFieldNameResponse {
    success: boolean;
    data: NameValueObject | null;
}
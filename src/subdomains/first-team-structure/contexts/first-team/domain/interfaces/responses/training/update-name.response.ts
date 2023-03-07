import { NameValueObject } from "../../../value-objects";

export interface IUpdatedNameResponse {
    success: boolean;
    data: NameValueObject | null;
}
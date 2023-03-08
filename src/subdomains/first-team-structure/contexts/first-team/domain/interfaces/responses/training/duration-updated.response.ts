import { DurationValueObject } from "../../../value-objects";

export interface IUpdatedDurationResponse {
    success: boolean;
    data: DurationValueObject | null;
}
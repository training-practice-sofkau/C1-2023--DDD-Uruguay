import { WageValueObject } from "../../../value-objects";

export interface IUpdatedPlayerWageResponse {
    success: boolean;
    data: WageValueObject | null;
}
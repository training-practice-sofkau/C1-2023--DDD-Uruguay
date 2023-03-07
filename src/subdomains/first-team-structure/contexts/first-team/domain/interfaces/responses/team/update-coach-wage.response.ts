import { WageValueObject } from "../../../value-objects";

export interface IUpdatedCoachWageResponse {
    success: boolean;
    data: WageValueObject | null;
}
import { PositionValueObject } from "../../../value-objects";

export interface IUpdatedPlayerPositionResponse {
    success: boolean;
    data: PositionValueObject | null;
}
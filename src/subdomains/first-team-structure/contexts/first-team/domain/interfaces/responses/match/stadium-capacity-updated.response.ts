import { CapacityValueObject } from "../../../value-objects";

export interface IUpdatedStadiumCapacityResponse {
    success: boolean;
    data: CapacityValueObject | null;
}
import { SpecialtyValueObject } from "../../../value-objects";

export interface IUpdatedTrainerSpecialtyResponse {
    success: boolean;
    data: SpecialtyValueObject | null;
}
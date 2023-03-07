import { SquareMetersValueObject } from "../../../value-objects";

export interface IUpdatedStadiumSquareMetersResponse {
    success: boolean;
    data: SquareMetersValueObject | null;
}
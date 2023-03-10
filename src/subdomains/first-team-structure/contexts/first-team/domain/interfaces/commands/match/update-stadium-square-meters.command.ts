import { SquareMetersValueObject } from "../../../value-objects";

export interface IUpdateStadiumSquareMeters {
    stadiumId: string,
    squareMeters: number | SquareMetersValueObject
}
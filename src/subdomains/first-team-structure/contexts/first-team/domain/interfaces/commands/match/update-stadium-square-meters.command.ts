import { IdValueObject, SquareMetersValueObject } from "../../../value-objects";

export interface IUpdateStadiumSquareMeters {
    stadiumId: string | IdValueObject
    squareMeters: number | SquareMetersValueObject
}
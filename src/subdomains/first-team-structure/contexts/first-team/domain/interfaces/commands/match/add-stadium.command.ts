import { CapacityValueObject, IdValueObject, NameValueObject, SquareMetersValueObject, TownValueObject } from "../../../value-objects";

export interface IAddStadiumCommand {
    stadiumId: string | IdValueObject,
    capacity: number | CapacityValueObject,
    squareMeters: number | SquareMetersValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}
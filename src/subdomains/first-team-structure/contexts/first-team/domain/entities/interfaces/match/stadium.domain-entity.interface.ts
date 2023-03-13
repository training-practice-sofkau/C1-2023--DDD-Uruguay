import { CapacityValueObject, IdValueObject, NameValueObject, SquareMetersValueObject, TownValueObject } from "../../../value-objects";

/**
 *Stadium Interface Entity of Match AR
 *
 * @export
 * @interface IStadiumDomainEntity
 */
export interface IStadiumDomainEntity {
    stadiumId?: string | IdValueObject,
    capacity: number | CapacityValueObject,
    squareMeters: number | SquareMetersValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}

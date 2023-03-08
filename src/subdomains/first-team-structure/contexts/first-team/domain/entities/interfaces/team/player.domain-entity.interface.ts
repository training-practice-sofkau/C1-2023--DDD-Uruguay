import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, PositionValueObject, WageValueObject } from "../../../value-objects";
import { PositionEnum } from '../../../value-objects/team/player/position/positions.enum';

/**
 *Player Interface Entity of Team AR
 *
 * @export
 * @interface IPlayerDomainEntity
 */
export interface IPlayerDomainEntity {
    playerId: string | IdValueObject,
    age: number | AgeValueObject,
    wage: number | WageValueObject,
    position: PositionEnum | PositionValueObject, 
    fullName: string | FullNameValueObject,
    country: string | CountryValueObject
}

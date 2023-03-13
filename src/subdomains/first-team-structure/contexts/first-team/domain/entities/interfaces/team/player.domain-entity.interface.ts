import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, PositionEnum, PositionValueObject, WageValueObject } from "../../../value-objects";
import { ITeamDomainEntity } from '../team.domain-entity.interface';

/**
 *Player Interface Entity of Team AR
 *
 * @export
 * @interface IPlayerDomainEntity
 */
export interface IPlayerDomainEntity {
    playerId?: string | IdValueObject,
    team: ITeamDomainEntity,
    age: number | AgeValueObject,
    wage: number | WageValueObject,
    position: PositionEnum | PositionValueObject, 
    fullName: string | FullNameValueObject,
    country: string | CountryValueObject
}

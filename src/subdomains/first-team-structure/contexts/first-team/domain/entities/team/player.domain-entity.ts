import { IdValueObject, AgeValueObject, WageValueObject, PositionValueObject, FullNameValueObject, CountryValueObject } from "../../value-objects";
import { PositionEnum } from "../../value-objects/team/player/position/positions.enum";
import { IPlayerDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Player Entity of Team AR
 *
 * @export
 * @class PlayerDomainEntity
 * @implements {IPlayerDomainEntity}
 */
export class PlayerDomainEntity implements IPlayerDomainEntity{
    playerId?: string | IdValueObject;
    age: number | AgeValueObject;
    wage: number | WageValueObject;
    position: PositionEnum | PositionValueObject;
    fullName: string | FullNameValueObject;
    country: string | CountryValueObject;

    constructor(data: IPlayerDomainEntity) {
        if(data.playerId) this.playerId = data.playerId
        else this.playerId = uuidv4();

        if(data.age) this.age = data.age

        if(data.wage) this.wage = data.wage

        if(data.position) this.position = data.position

        if(data.fullName) this.fullName = data.fullName

        if(data.country) this.country = data.country
    }
}

import { IdValueObject, AgeValueObject, WageValueObject, PositionValueObject, FullNameValueObject, CountryValueObject, PositionEnum } from "../../value-objects";
import { IPlayerDomainEntity, ITeamDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';
import { TeamDomainEntity } from '../team.domain-entity';

/**
 *Player Entity of Team AR
 *
 * @export
 * @class PlayerDomainEntity
 * @implements {IPlayerDomainEntity}
 */
export class PlayerDomainEntity implements IPlayerDomainEntity{
    playerId?: string | IdValueObject;
    team: TeamDomainEntity;
    age: number | AgeValueObject;
    wage: number | WageValueObject;
    position: PositionEnum | PositionValueObject;
    fullName: string | FullNameValueObject;
    country: string | CountryValueObject;

    constructor(data: IPlayerDomainEntity) {
        if(data.playerId) this.playerId = data.playerId
        else this.playerId = uuidv4();

        if(data.age) this.age = data.age

        if(data.team) this.team = data.team

        if(data.wage) this.wage = data.wage

        if(data.position) this.position = data.position

        if(data.fullName) this.fullName = data.fullName

        if(data.country) this.country = data.country
    }
}

import { IdValueObject, NameValueObject, TownValueObject } from "../value-objects";
import { ITeamDomainEntity } from "./interfaces";
import { CoachDomainEntity } from "./team/coach.domain-entity";
import { PlayerDomainEntity } from "./team/player.domain-entity";
import { v4 as uuidv4 } from 'uuid';

/**
 *Team Aggregate Entity
 *
 * @export
 * @class TeamDomainEntity
 * @implements {ITeamDomainEntity}
 */
export class TeamDomainEntity implements ITeamDomainEntity{
    teamId?: string | IdValueObject;
    coach: CoachDomainEntity;
    players: PlayerDomainEntity[];
    name: string | NameValueObject;
    town: string | TownValueObject;

    constructor(data: ITeamDomainEntity) {
        if(data.teamId) this.teamId = data.teamId
        else this.teamId = uuidv4();

        if(data.coach) this.coach = data.coach

        if(data.players) this.players = data.players

        if(data.name) this.name = data.name

        if(data.town) this.town = data.town
    }
}

import { IdValueObject, NameValueObject, TownValueObject } from "../value-objects";
import { ICoachDomainEntity, IPlayerDomainEntity, ITeamDomainEntity } from "./interfaces";
import { CoachDomainEntity } from "./team/coach.domain-entity";
import { PlayerDomainEntity } from "./team/player.domain-entity";

/**
 *Team Aggregate Entity
 *
 * @export
 * @class TeamDomainEntity
 * @implements {ITeamDomainEntity}
 */
export class TeamDomainEntity implements ITeamDomainEntity{
    teamId: string | IdValueObject;
    coach: CoachDomainEntity;
    players: PlayerDomainEntity[];
    name: string | NameValueObject;
    town: string | TownValueObject;
}

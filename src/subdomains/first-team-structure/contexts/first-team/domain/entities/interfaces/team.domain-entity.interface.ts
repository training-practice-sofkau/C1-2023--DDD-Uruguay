import { IdValueObject, NameValueObject, TownValueObject } from "../../value-objects";
import { ICoachDomainEntity, IPlayerDomainEntity } from "./team";

/**
 *Interface of Team Aggregate Entity
 *
 * @export
 * @interface ITeamDomainEntity
 */
export interface ITeamDomainEntity {
    teamId: string | IdValueObject,
    coach: ICoachDomainEntity,
    players: Array<IPlayerDomainEntity>,
    name: string | NameValueObject,
    town: string | TownValueObject
}

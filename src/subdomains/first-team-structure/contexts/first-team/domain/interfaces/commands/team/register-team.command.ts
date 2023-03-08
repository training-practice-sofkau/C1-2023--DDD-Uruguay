import { ICoachDomainEntity, IPlayerDomainEntity } from "../../../entities";
import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

export interface IRegisterTeamCommand {
    teamId: string | IdValueObject,
    coach: ICoachDomainEntity,
    players: Array<IPlayerDomainEntity>,
    name: string | NameValueObject,
    town: string | TownValueObject
}
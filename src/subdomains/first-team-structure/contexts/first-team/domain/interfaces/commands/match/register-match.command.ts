import { IRivalDomainEntity, IStadiumDomainEntity, ITeamDomainEntity, RivalDomainEntity, StadiumDomainEntity } from "../../../entities";
import { DateValueObject, IdValueObject, ScoreValueObject } from "../../../value-objects";

export interface IRegisterMatchCommand {
    matchId: string | IdValueObject,
    team: ITeamDomainEntity,
    score: string | ScoreValueObject,
    rival: IRivalDomainEntity,
    stadium: IStadiumDomainEntity,
    date: Date | DateValueObject
}
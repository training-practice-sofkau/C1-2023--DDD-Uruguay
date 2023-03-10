import { IdValueObject, ScoreValueObject, DateValueObject } from "../value-objects";
import { IMatchDomainEntity } from "./interfaces";
import { RivalDomainEntity } from "./match/rival.domain-entity";
import { StadiumDomainEntity } from "./match/stadium.domain-entity";
import { TeamDomainEntity } from "./team.domain-entity";
import { v4 as uuidv4 } from 'uuid';

/**
 *Match Aggregate Entity
 *
 * @export
 * @class MatchDomainEntity
 * @implements {IMatchDomainEntity}
 */
export class MatchDomainEntity implements IMatchDomainEntity{
    matchId?: string | IdValueObject;
    team: TeamDomainEntity;
    score: string | ScoreValueObject;
    rival: RivalDomainEntity;
    stadium: StadiumDomainEntity;
    date: Date | DateValueObject;

    constructor(data?:IMatchDomainEntity) {
        if(data.matchId) this.matchId = data.matchId
        else this.matchId = uuidv4();

        if(data.team) this.team = data.team

        if(data.score) this.score = data.score

        if(data.rival) this.rival = data.rival

        if(data.stadium) this.stadium = data.stadium

        if(data.date) this.date = data.date
    }
}

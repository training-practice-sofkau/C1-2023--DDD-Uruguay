import { DateValueObject, ScoreValueObject } from '../../value-objects';
import { IdValueObject } from '../../value-objects/shared/id/id.value-object';
import { RivalDomainEntity, StadiumDomainEntity } from '../match';
import { ITeamDomainEntity } from './';

/**
 *Interface of Match Aggregate Entity
 *
 * @export
 * @interface IMatchDomainEntity
 */
export interface IMatchDomainEntity {
    matchId?: string | IdValueObject,
    team: ITeamDomainEntity,
    score: string | ScoreValueObject,
    rival: RivalDomainEntity,
    stadium: StadiumDomainEntity,
    date: Date | DateValueObject
}

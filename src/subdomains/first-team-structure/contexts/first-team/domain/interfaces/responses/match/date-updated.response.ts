import { MatchDomainEntity } from '../../../entities/match.domain-entity';

export interface IUpdatedDateResponse {
    success: boolean;
    data: MatchDomainEntity | null;
}
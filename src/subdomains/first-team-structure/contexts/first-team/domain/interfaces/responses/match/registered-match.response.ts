import { MatchDomainEntity } from "../../../entities";

export interface IRegisteredMatchResponse {
    success: boolean;
    data: MatchDomainEntity | null;
}
import { TeamDomainEntity } from "../../../entities";

export interface IGotTeamReponse {
    success: boolean;
    data: TeamDomainEntity | null;
}
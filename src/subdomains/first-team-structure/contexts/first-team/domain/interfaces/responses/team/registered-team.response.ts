import { TeamDomainEntity } from "../../../entities";

export interface IRegisteredTeamResponse {
    success: boolean;
    data: TeamDomainEntity | null;
}
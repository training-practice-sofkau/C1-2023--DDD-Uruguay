import { CoachDomainEntity } from "../../../entities";

export interface IGotCoachResponse {
    success: boolean;
    data: CoachDomainEntity | null;
}
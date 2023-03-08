import { CoachDomainEntity } from "../../../entities";

export interface IAddedCoachResponse {
    success: boolean;
    data: CoachDomainEntity | null;
}
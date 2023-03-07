import { CheckInDomainEntity } from "../../../entities";

export interface ICheckInCreatedResponse {
    success: boolean;
    data: CheckInDomainEntity | null;
}
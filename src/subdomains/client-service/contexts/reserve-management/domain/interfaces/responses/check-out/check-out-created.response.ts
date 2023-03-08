import { CheckOutDomainEntity } from "../../../entities";

export interface ICheckOutCreatedResponse {
    success: boolean;
    data: CheckOutDomainEntity | null;
}
import { CustomerDomainEntity } from "../../../entities";

export interface ICustomerAddedResponse {
    success: boolean;
    data: CustomerDomainEntity | null;
}
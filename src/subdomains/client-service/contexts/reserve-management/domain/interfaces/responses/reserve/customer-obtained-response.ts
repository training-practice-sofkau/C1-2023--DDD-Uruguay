import { CustomerDomainEntity } from "../../../entities";

export class ICustomerObtainedResponse {
    succes: boolean;
    data: CustomerDomainEntity | null 
}

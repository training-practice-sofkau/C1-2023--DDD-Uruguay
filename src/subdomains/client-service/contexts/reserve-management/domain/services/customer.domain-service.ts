import { CustomerDomainEntity } from "../entities";
import { IUpdatePaymentMethod } from "../interfaces";

export interface ICustomerDomainService {
    updatePaymentMethod(data: IUpdatePaymentMethod): Promise<CustomerDomainEntity>;
}
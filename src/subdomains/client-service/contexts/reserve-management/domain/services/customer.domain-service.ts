import { CustomerDomainEntity } from "../entities";
import { IUpdatePaymentMethod } from "../interfaces";

export interface ICustomerDomainService<T extends CustomerDomainEntity = CustomerDomainEntity> {
    updatePaymentMethod(data: IUpdatePaymentMethod): Promise<CustomerDomainEntity>;
}
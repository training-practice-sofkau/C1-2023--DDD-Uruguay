import { IUpdatePaymentMethod } from "../interfaces";

export interface ICustomerDomainService {
    updatePaymentMethod(data: IUpdatePaymentMethod): Promise<string>;
}
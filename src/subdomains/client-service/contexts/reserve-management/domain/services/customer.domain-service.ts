export interface ICustomerDomainService {
    updatePaymentMethod(customerId: string, newPaymentMethod: string): Promise<string>;
}
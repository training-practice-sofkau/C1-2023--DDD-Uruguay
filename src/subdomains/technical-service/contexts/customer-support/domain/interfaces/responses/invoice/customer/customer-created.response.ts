import { CustomerDomainEntityBase } from '../../../../entities/invoice/customer.domain-entity/customer.domain-entity';

export interface IInvoiceCreatedResponse{
    success: boolean;
    data: CustomerDomainEntityBase | null;
}
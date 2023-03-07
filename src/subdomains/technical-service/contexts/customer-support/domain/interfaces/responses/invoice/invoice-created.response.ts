import { InvoiceDomainEntityBase } from '../../../entities/invoice/invoice.domain-entity';

export interface IInvoiceCreatedResponse{
    success: boolean;
    data: InvoiceDomainEntityBase | null;
}
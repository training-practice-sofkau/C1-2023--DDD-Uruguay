import { InvoiceDomainEntityBase } from '../../../entities/invoice.domain-entity';

export interface IInvoiceCreatedResponse{
    success: boolean;
    data: InvoiceDomainEntityBase | null;
}
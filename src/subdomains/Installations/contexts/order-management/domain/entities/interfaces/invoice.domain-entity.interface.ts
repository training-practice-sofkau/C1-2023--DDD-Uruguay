import { InvoiceIdValueObject, InvoiceStatusValueObject } from '../../value-objects/invoice/';
import { CompanyDomainEntityBase, FeeDomainEntityBase } from '../invoice';

export interface IInvoiceDomainEntity {
    invoiceId?: string | InvoiceIdValueObject;
    status?: boolean | InvoiceStatusValueObject;
    company: CompanyDomainEntityBase;
    fee: FeeDomainEntityBase;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
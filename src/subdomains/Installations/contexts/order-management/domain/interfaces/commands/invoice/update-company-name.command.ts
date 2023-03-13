import { InvoiceDomainEntityBase } from '../../../entities';
import { CompanyNameValueObject } from '../../../value-objects/invoice';

export interface IUpdateCompanyNameCommand {
    invoiceId: string;
    name: CompanyNameValueObject;
}
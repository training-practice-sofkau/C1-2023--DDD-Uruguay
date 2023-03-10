import { InvoiceDomainEntityBase } from '../../../entities';
import { CompanyNameValueObject } from '../../../value-objects/invoice';

export interface IUpdateCompanyNameCommand {
    domain: InvoiceDomainEntityBase;
    name: CompanyNameValueObject;
}
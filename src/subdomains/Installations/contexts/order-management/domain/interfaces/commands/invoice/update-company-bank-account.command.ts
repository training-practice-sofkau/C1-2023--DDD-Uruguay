import { InvoiceDomainEntityBase } from '../../../entities';
import { CompanyBankAccountValueObject } from '../../../value-objects/invoice';

export interface IUpdateCompanyBankAccountCommand {
    domain: InvoiceDomainEntityBase;
    bankAccount: CompanyBankAccountValueObject;
}
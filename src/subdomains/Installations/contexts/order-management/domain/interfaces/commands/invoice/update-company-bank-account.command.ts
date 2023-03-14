import { CompanyBankAccountValueObject } from '../../../value-objects/invoice';

export interface IUpdateCompanyBankAccountCommand {
  companyId: string;
  bankAccount: CompanyBankAccountValueObject;
}

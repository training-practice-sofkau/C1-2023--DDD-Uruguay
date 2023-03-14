import { CompanyDomainEntityBase } from '../../entities/invoice';
import {
  CompanyBankAccountValueObject,
  CompanyNameValueObject,
} from '../../value-objects/invoice/company';

export interface ICompanyDomainService<T extends CompanyDomainEntityBase = CompanyDomainEntityBase> {
  createCompany(company: T): Promise<T>;
  getCompany(companyId: string): Promise<T>;
  deleteCompany(companyId: string): Promise<boolean>;
  updateCompanyName(companyId: string, newCompanyName: CompanyNameValueObject): Promise<T>;
  updateCompanyBankAccount(companyId: string, newCompanyBankAccount: CompanyBankAccountValueObject): Promise<T>;
}

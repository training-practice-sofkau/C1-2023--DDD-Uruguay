import {
  CompanyBankAccountValueObject,
  CompanyIdValueObject,
  CompanyNameValueObject,
} from "../../value-objects/invoice";

export interface ICompanyDomainEntity {
  companyId?: string | CompanyIdValueObject;
  name?: string | CompanyNameValueObject;
  bankAccount?: string | CompanyBankAccountValueObject;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;
}

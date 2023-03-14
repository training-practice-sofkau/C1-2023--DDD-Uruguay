import { CompanyDomainEntityBase } from '../../../entities/invoice';

export interface IcreateCompanyResponse {
  success: boolean;
  data: CompanyDomainEntityBase | null;
}

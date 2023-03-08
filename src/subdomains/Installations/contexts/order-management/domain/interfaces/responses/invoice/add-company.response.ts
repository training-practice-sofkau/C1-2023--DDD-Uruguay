import { CompanyDomainEntityBase } from "../../../entities/invoice";

export interface IAddCompanyResponse {
  success: boolean;
  data: CompanyDomainEntityBase | null;
}
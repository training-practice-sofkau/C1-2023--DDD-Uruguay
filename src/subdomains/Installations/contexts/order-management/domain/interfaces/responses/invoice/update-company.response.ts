import { CompanyDomainEntityBase } from "../../../entities/invoice";

export interface IUpdateCompanyResponse {
  success: boolean;
  data: CompanyDomainEntityBase | null;
}
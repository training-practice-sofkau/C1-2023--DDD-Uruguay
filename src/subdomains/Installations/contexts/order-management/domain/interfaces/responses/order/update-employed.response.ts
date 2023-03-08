import { EmployedDomainEntityBase } from "../../../entities/order";

export interface IUpdateEmployedResponse {
  success: boolean;
  data: EmployedDomainEntityBase | null;
}
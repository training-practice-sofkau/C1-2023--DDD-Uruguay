import { EmployedDomainEntityBase } from "../../../entities/order";

export interface IAddEmployedResponse {
  success: boolean;
  data: EmployedDomainEntityBase | null;
}
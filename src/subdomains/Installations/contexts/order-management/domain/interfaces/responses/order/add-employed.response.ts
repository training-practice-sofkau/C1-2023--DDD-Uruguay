import { EmployedDomainEntityBase } from '../../../entities/order';

export interface IcreateEmployedResponse {
  success: boolean;
  data: EmployedDomainEntityBase | null;
}

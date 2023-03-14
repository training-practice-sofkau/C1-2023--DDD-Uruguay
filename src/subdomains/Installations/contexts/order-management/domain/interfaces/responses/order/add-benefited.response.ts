import { BenefitedDomainEntityBase } from '../../../entities/order';

export interface IcreateBenefitedResponse {
  success: boolean;
  data: BenefitedDomainEntityBase | null;
}

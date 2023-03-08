import { BenefitedDomainEntityBase } from "../../../entities/order";

export interface IAddBenefitedResponse {
  success: boolean;
  data: BenefitedDomainEntityBase | null;
}
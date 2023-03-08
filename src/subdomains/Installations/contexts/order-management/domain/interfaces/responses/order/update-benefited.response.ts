import { BenefitedDomainEntityBase } from "../../../entities/order";

export interface IUpdateBenefitedResponse {
  success: boolean;
  data: BenefitedDomainEntityBase | null;
}
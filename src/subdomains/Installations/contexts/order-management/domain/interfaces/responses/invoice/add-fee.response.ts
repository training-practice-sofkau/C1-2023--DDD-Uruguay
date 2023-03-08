import { FeeDomainEntityBase } from "../../../entities/invoice";

export interface IAddFeeResponse {
  success: boolean;
  data: FeeDomainEntityBase | null;
}
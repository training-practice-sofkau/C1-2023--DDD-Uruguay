import { FeeDomainEntityBase } from "../../../entities/invoice";

export interface IUpdateFeeResponse {
  success: boolean;
  data: FeeDomainEntityBase | null;
}
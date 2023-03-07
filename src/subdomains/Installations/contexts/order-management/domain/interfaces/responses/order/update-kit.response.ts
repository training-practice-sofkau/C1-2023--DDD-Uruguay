import { KitDomainEntityBase } from "../../../entities/order";

export interface IUpdateKitResponse {
  success: boolean;
  data: KitDomainEntityBase | null;
}
import { KitDomainEntityBase } from "../../../entities/order";

export interface IAddKitResponse {
  success: boolean;
  data: KitDomainEntityBase | null;
}
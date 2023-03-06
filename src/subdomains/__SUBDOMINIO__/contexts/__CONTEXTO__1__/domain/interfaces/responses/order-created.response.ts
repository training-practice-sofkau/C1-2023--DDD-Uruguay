import { OrderDomainEntityBase } from "../../entities";

export interface IAddOrderResponse {
  success: boolean;
  data: OrderDomainEntityBase | null;
}

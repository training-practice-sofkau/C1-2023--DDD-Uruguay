import { OrderDomainEntityBase } from "../../entities";
import { RegisteredOrderEventPublisherBase } from "../../events";
import { IOrderDomainService } from "../../services";

export const CreateOrder = async (
  order: OrderDomainEntityBase,
  orderService: IOrderDomainService,
  registeredOrderEventPublisher: RegisteredOrderEventPublisherBase
): Promise<OrderDomainEntityBase | null> => {
  const result = await orderService.createOrder(order);
  registeredOrderEventPublisher.response = result;
  registeredOrderEventPublisher.publish();
  return result;
};

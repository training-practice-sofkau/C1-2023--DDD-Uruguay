import { OrderDomainEntityBase } from '../../../entities';
import { IOrderDomainService } from '../../../services/';
import { RegisteredOrderEventPublisherBase } from '../../../events';

export const CreateOrder = async (
    order: OrderDomainEntityBase,
    orderService: IOrderDomainService,
    registeredOrderEventPublisher: RegisteredOrderEventPublisherBase
): Promise<OrderDomainEntityBase | null> => {
    const result = await orderService.createOrder(order);
    registeredOrderEventPublisher.response = result;
    registeredOrderEventPublisher.publish();
    return result;
}
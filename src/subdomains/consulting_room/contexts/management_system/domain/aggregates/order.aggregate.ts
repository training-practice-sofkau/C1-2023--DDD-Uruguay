import { OrderDomainEntityBase } from '../entities';
import { RegisteredOrderEventPublisherBase } from '../events';
import { IOrderDomainService } from '../services';
import { AggregateRootException } from '../../../../../../libs/sofka/';
export class OrderAggregate
    implements
    IOrderDomainService {

    private readonly orderService?: IOrderDomainService;
    private readonly registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase;

    constructor(
        {
            orderService,
            registeredOrderEventPublisherBase
        }: {
            orderService?: IOrderDomainService,
            registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase
        }
    ) {
        this.orderService = orderService,
            this.registeredOrderEventPublisherBase = registeredOrderEventPublisherBase
    }

    async createOrder(order: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
        if (this.orderService && this.registeredOrderEventPublisherBase) {
            const result = await this.orderService.createOrder(order);
            this.registeredOrderEventPublisherBase.response = result;
            this.registeredOrderEventPublisherBase.publish();
            return this.registeredOrderEventPublisherBase.response;
        }
        throw new AggregateRootException(
            'OrderAggregate "OrderService" y/o "registeredOrderEventPublisherBase" no están definidos'
        )
    }

    getOrder(orderId: string): Promise<OrderDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    updateDescriptio(orderId: string, newDescription: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
}
import { OrderDomainEntityBase } from '../entities';
import { RegisteredOrderEventPublisherBase } from '../events';
import { IOrderDomainService } from '../services';
import { AggregateRootException } from '../../../../../../libs/sofka/';
import { CreateOrder } from './helpers';
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

    // se hizo un refactoring para poder hacer mas facil las pruebas a este metodo
    async createOrder(order: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
        if (!this.orderService)
            throw new AggregateRootException('OrderService no esta definido')
        if (!this.registeredOrderEventPublisherBase)
            throw new AggregateRootException('registeredOrderEventPublisherBase no esta definido')

        return CreateOrder(order, this.orderService, this.registeredOrderEventPublisherBase)
    }

    getOrder(orderId: string): Promise<OrderDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    updateDescriptio(orderId: string, newDescription: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
}
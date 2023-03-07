import { AggregateRootException } from '../../../../../../libs/sofka';
import { OrderDomainEntityBase } from '../entities';
import { BenefitedDomainEntityBase, KitDomainEntityBase, EmployedDomainEntityBase } from '../entities/order'
import { RegisteredOrderEventPublisherBase } from '../events';
import { IOrderDomainService } from '../services';
import { CreateOrder } from './helpers';

export class OrderAggregate implements IOrderDomainService {

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
        this.orderService = orderService;
        this.registeredOrderEventPublisherBase = registeredOrderEventPublisherBase;
    }

    async createOrder(order: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
        if (!this.orderService)
            throw new AggregateRootException('OrderService is not defined')
        if (!this.registeredOrderEventPublisherBase)
            throw new AggregateRootException('RegisteredOrderEventPublisherBase is not defined')

        return CreateOrder(order, this.orderService, this.registeredOrderEventPublisherBase)
    }

    getOrder(orderId: string): Promise<OrderDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    updateBenefited(orderId: string, newBenefited: BenefitedDomainEntityBase): Promise<BenefitedDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    updateKit(orderId: string, newKit: KitDomainEntityBase): Promise<KitDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    updateEmployed(orderId: string, newEmployed: EmployedDomainEntityBase): Promise<EmployedDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    changeStatus(orderId: string): Promise<OrderDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

}
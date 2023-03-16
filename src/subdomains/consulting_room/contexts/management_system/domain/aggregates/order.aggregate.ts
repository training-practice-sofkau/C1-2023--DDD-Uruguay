

import { ClientDomainEntitybase, OrderDomainEntityBase } from '../entities';
import { RegisteredOrderEventPublisherBase, RegisteredClientEventPublisherBase } from '../events';
import { IOrderDomainService, IClientDomainService } from '../services';
import { CreateOrder, CreateClient } from './helpers';
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';

export class OrderAggregate
    implements
    IOrderDomainService,
    IClientDomainService {

    private readonly orderService?: IOrderDomainService;
    private readonly clientService?: IClientDomainService;
    private readonly registeredClientEventPublisherBase?: RegisteredClientEventPublisherBase;
    private readonly registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase;

    constructor(
        {
            orderService,
            clientService,
            registeredClientEventPublisherBase,
            registeredOrderEventPublisherBase
        }: {
            orderService?: IOrderDomainService;
            clientService?: IClientDomainService;
            registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase;
            registeredClientEventPublisherBase?: RegisteredClientEventPublisherBase;
        }
    ) {
        this.orderService = orderService;
        this.clientService = clientService;
        this.registeredOrderEventPublisherBase = registeredOrderEventPublisherBase;
        this.registeredClientEventPublisherBase = registeredClientEventPublisherBase;
    }
    deleteOrder(orderId: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    getClient(clientId: string): Promise<ClientDomainEntitybase> {
        throw new Error('Method not implemented.');
    }
    async registerClient(client: ClientDomainEntitybase): Promise<ClientDomainEntitybase> {
        if (!this.clientService)
            throw new AggregateRootException('clientService no esta definido')
        if (!this.registeredClientEventPublisherBase)
            throw new AggregateRootException('registeredClientEventPublisherBase no esta definido')

        return CreateClient(client, this.clientService, this.registeredClientEventPublisherBase)
    }
    updateClientName(clientId: string, entity: ClientDomainEntitybase): Promise<ClientDomainEntitybase> {
        throw new Error('Method not implemented.');
    }
    updateClientPhone(clientId: string, entity: ClientDomainEntitybase): Promise<ClientDomainEntitybase> {
        throw new Error('Method not implemented.');
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

    updateDescription(orderId: string, entity: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
        throw new Error('Method not implemented.');
    }
}
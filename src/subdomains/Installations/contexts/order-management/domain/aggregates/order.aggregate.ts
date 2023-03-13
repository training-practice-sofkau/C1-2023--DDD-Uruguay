import { AggregateRootException } from '../../../../../../libs/sofka';
import { OrderDomainEntityBase } from '../entities';
import {
  BenefitedDomainEntityBase,
  EmployedDomainEntityBase,
  KitDomainEntityBase,
} from '../entities/order';
import {
  GetOrderEventPublisherBase,
  RegisteredOrderEventPublisherBase,
} from '../events';
import {
  OrderBenefitedAddedEventPublisherBase,
  OrderBenefitedUpdatedEventPublisherBase,
  OrderEmployedAddedEventPublisherBase,
  OrderEmployedUpdatedEventPublisherBase,
  OrderKitAddedEventPublisherBase,
  OrderKitUpdatedEventPublisherBase,
  OrderStatusChangedEventPublisherBase,
} from '../events/publishers/order';
import { IOrderDomainService } from '../services';
import { CreateOrder } from './helpers';

export class OrderAggregate implements IOrderDomainService {
  private readonly orderService?: IOrderDomainService;
  private readonly registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase;
  private readonly getOrderEventPublisherBase?: GetOrderEventPublisherBase;
  private readonly orderBenefitedAddedEventPublisherBase?: OrderBenefitedAddedEventPublisherBase;
  private readonly orderBenefitedUpdatedEventPublisherBase?: OrderBenefitedUpdatedEventPublisherBase;
  private readonly orderEmployedAddedEventPublisherBase?: OrderEmployedAddedEventPublisherBase;
  private readonly orderEmployedUpdatedEventPublisherBase?: OrderEmployedUpdatedEventPublisherBase;
  private readonly orderKitAddedEventPublisherBase?: OrderKitAddedEventPublisherBase;
  private readonly orderKitUpdatedEventPublisherBase?: OrderKitUpdatedEventPublisherBase;
  private readonly orderStatusChangedEventPublisherBase?: OrderStatusChangedEventPublisherBase;

  constructor({
    orderService,
    registeredOrderEventPublisherBase,
    getOrderEventPublisherBase,
    orderBenefitedAddedEventPublisherBase,
    orderBenefitedUpdatedEventPublisherBase,
    orderEmployedAddedEventPublisherBase,
    orderEmployedUpdatedEventPublisherBase,
    orderKitAddedEventPublisherBase,
    orderKitUpdatedEventPublisherBase,
    orderStatusChangedEventPublisherBase,
  }: {
    orderService?: IOrderDomainService;
    registeredOrderEventPublisherBase?: RegisteredOrderEventPublisherBase;
    getOrderEventPublisherBase?: GetOrderEventPublisherBase;
    orderBenefitedAddedEventPublisherBase?: OrderBenefitedAddedEventPublisherBase;
    orderBenefitedUpdatedEventPublisherBase?: OrderBenefitedUpdatedEventPublisherBase;
    orderEmployedAddedEventPublisherBase?: OrderEmployedAddedEventPublisherBase;
    orderEmployedUpdatedEventPublisherBase?: OrderEmployedUpdatedEventPublisherBase;
    orderKitAddedEventPublisherBase?: OrderKitAddedEventPublisherBase;
    orderKitUpdatedEventPublisherBase?: OrderKitUpdatedEventPublisherBase;
    orderStatusChangedEventPublisherBase?: OrderStatusChangedEventPublisherBase;
  }) {
    this.orderService = orderService;
    this.registeredOrderEventPublisherBase = registeredOrderEventPublisherBase;
    this.getOrderEventPublisherBase = getOrderEventPublisherBase;
    this.orderBenefitedAddedEventPublisherBase =
      orderBenefitedAddedEventPublisherBase;
    this.orderBenefitedUpdatedEventPublisherBase =
      orderBenefitedUpdatedEventPublisherBase;
    this.orderEmployedAddedEventPublisherBase =
      orderEmployedAddedEventPublisherBase;
    this.orderEmployedUpdatedEventPublisherBase =
      orderEmployedUpdatedEventPublisherBase;
    this.orderKitAddedEventPublisherBase = orderKitAddedEventPublisherBase;
    this.orderKitUpdatedEventPublisherBase = orderKitUpdatedEventPublisherBase;
    this.orderStatusChangedEventPublisherBase =
      orderStatusChangedEventPublisherBase;
  }

  async createOrder(
    order: OrderDomainEntityBase
  ): Promise<OrderDomainEntityBase> {
    if (!this.orderService)
      throw new AggregateRootException("OrderService is not defined");
    if (!this.registeredOrderEventPublisherBase)
      throw new AggregateRootException(
        "RegisteredOrderEventPublisherBase is not defined"
      );

    return CreateOrder(
      order,
      this.orderService,
      this.registeredOrderEventPublisherBase
    );
  }

  async getOrder(orderId: string): Promise<OrderDomainEntityBase> {
    if (!this.getOrderEventPublisherBase)
      throw new AggregateRootException(
        "GetOrderEventPublisherBase is not defined"
      );

    return this.getOrderEventPublisherBase.response[0];
  }

  async deleteOrder(orderId: string): Promise<boolean> {
    if (!this.getOrderEventPublisherBase)
      throw new AggregateRootException(
        "GetOrderEventPublisherBase is not defined"
      );

    return this.registeredOrderEventPublisherBase.response[0];
  }

  async createBenefited(
    benefited: BenefitedDomainEntityBase
  ): Promise<BenefitedDomainEntityBase> {
    if (!this.orderBenefitedAddedEventPublisherBase)
      throw new AggregateRootException(
        "OrderBenefitedAddedEventPublisherBase is not defined"
      );

    return this.orderBenefitedAddedEventPublisherBase.response[0];
  }

  async createKit(kit: KitDomainEntityBase): Promise<KitDomainEntityBase> {
    if (!this.orderKitAddedEventPublisherBase)
      throw new AggregateRootException(
        "OrderKitAddedEventPublisherBase is not defined"
      );

    return this.orderKitAddedEventPublisherBase.response[0];
  }

  async createEmployed(
    employed: EmployedDomainEntityBase
  ): Promise<EmployedDomainEntityBase> {
    if (!this.orderEmployedAddedEventPublisherBase)
      throw new AggregateRootException(
        "OrderEmployedAddedEventPublisherBase is not defined"
      );

    return this.orderEmployedAddedEventPublisherBase.response[0];
  }

  async updateBenefited(
    orderId: string,
    newBenefited: BenefitedDomainEntityBase
  ): Promise<BenefitedDomainEntityBase> {
    if (!this.orderBenefitedUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "OrderBenefitedUpdatedEventPublisherBase is not defined"
      );

    return this.orderBenefitedUpdatedEventPublisherBase.response[0];
  }

  async updateKit(
    orderId: string,
    newKit: KitDomainEntityBase
  ): Promise<KitDomainEntityBase> {
    if (!this.orderKitUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "OrderKitUpdatedEventPublisherBase is not defined"
      );

    return this.orderKitUpdatedEventPublisherBase.response[0];
  }

  async updateEmployed(
    orderId: string,
    newEmployed: EmployedDomainEntityBase
  ): Promise<EmployedDomainEntityBase> {
    if (!this.orderEmployedUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "OrderEmployedUpdatedEventPublisherBase is not defined"
      );

    return this.orderEmployedUpdatedEventPublisherBase.response[0];
  }

  async changeStatus(orderId: string): Promise<boolean> {
    if (!this.orderStatusChangedEventPublisherBase)
      throw new AggregateRootException(
        "OrderStatusChangedEventPublisherBase is not defined"
      );

    return this.orderStatusChangedEventPublisherBase.response[0];
  }
}

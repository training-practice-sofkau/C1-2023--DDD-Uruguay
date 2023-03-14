import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '../../../../../../libs/sofka';
import { OrderAggregate } from '../../domain/aggregates';
import { OrderDomainEntityBase } from '../../domain/entities';
import { IOrderDomainEntity } from '../../domain/entities/interfaces';
import { CreatedOrderEventPublisherBase } from '../../domain/events';
import { ICreateOrderCommand } from '../../domain/interfaces/commands';
import { ICreateOrderResponse } from '../../domain/interfaces/responses';
import { IOrderDomainService } from '../../domain/services';
import {
  OrderIdValueObject,
  OrderStatusValueObject,
} from '../../domain/value-objects';

export class CreateOrderUseCase<
      Command extends ICreateOrderCommand = ICreateOrderCommand,
      Response extends ICreateOrderResponse = ICreateOrderResponse
    >
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
  {
    private readonly orderAggregateRoot: OrderAggregate;
  
    constructor(
      private readonly orderService: IOrderDomainService,
      private readonly createdOrderEventPublisherBase: CreatedOrderEventPublisherBase
    ) {
      super();
      this.orderAggregateRoot = new OrderAggregate({
        orderService,
        createdOrderEventPublisherBase,
      });
    }
  
    async execute(command?: Command): Promise<Response> {
      const data = await this.executeCommand(command);
  
      return { success: data ? true : false, data } as unknown as Response;
    }
  
    private async executeCommand(
      command: Command
    ): Promise<OrderDomainEntityBase | null> {
      const ValueObject = this.createValueObject(command);
      this.validateValueObject(ValueObject);
      const entity = this.createEntityOrderDomain(ValueObject);
      return this.executeOrderAggregateRoot(entity);
    }
  
    private createValueObject(command: Command): IOrderDomainEntity {
      const orderId = new OrderIdValueObject(command.orderId);
      const status = new OrderStatusValueObject(command.status);
      const kit = command.kit;
      const benefited = command.benefited;
      const employed = command.employed;
  
      return {
        orderId,
        status,
        kit,
        benefited,
        employed
      };
    }
  
    private validateValueObject(valueObject: IOrderDomainEntity): void {
      const { orderId, status } = valueObject;
  
      if (orderId instanceof OrderIdValueObject && orderId.hasErrors())
        this.setErrors(orderId.getErrors());

      if (status instanceof OrderStatusValueObject && status.hasErrors())
        this.setErrors(status.getErrors());
  
      if (this.hasErrors() === true)
        throw new ValueObjectException(
          "Hay algunos errores en el comando ejecutado por createOrderUserCase",
          this.getErrors()
        );
    }
  
    private createEntityOrderDomain(
      valueObject: IOrderDomainEntity
    ): OrderDomainEntityBase {
      const { orderId, status, kit, benefited, employed } = valueObject;
  
      return new OrderDomainEntityBase({
        orderId: orderId.valueOf(),
        status: status.valueOf(),
        kit: kit.valueOf(),
        benefited: benefited.valueOf(),
        employed: employed.valueOf()
      });
    }
  
    private executeOrderAggregateRoot(
      entity: OrderDomainEntityBase
    ): Promise<OrderDomainEntityBase | null> {
      return this.orderAggregateRoot.createOrder(entity);
    }
  }
  
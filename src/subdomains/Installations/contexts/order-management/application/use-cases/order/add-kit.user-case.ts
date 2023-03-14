import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '../../../../../../../libs/sofka';
import { OrderAggregate } from '../../../domain/aggregates';
import { KitDomainEntityBase } from '../../../domain/entities';
import { IKitDomainEntity } from '../../../domain/entities/interfaces';
import { RegisteredOrderEventPublisherBase } from '../../../domain/events';
import { IcreateKitCommand } from '../../../domain/interfaces/commands/order';
import { IcreateKitResponse } from '../../../domain/interfaces/responses/order';
import { IOrderDomainService } from '../../../domain/services';
import { KitModelValueObject } from '../../../domain/value-objects';

export class createKitUseCase<
    Command extends IcreateKitCommand = IcreateKitCommand,
    Response extends IcreateKitResponse = IcreateKitResponse
  >
  extends ValueObjectErrorHandler
  implements IUseCase<Command, Response>
{
  private readonly orderAggregateRoot: OrderAggregate;

  constructor(
    private readonly orderService: IOrderDomainService,
    private readonly registeredOrderEventPublisherBase: RegisteredOrderEventPublisherBase
  ) {
    super();
    this.orderAggregateRoot = new OrderAggregate({
      orderService,
      registeredOrderEventPublisherBase,
    });
  }

  async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response;
  }

  private async executeCommand(
    command: Command
  ): Promise<KitDomainEntityBase | null> {
    const ValueObject = this.createValueObject(command);
    this.validateValueObject(ValueObject);
    const entity = this.createEntityKitDomain(ValueObject);
    return this.executeOrderAggregateRoot(entity);
  }

  private createValueObject(command: Command): IKitDomainEntity {
    const model = new KitModelValueObject(command.model);

    return {
      model,
    };
  }

  private validateValueObject(valueObject: IKitDomainEntity): void {
    const { model } = valueObject;

    if (model instanceof KitModelValueObject && model.hasErrors())
      this.setErrors(model.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por createKitUserCase",
        this.getErrors()
      );
  }

  private createEntityKitDomain(
    valueObject: IKitDomainEntity
  ): KitDomainEntityBase {
    const { model } = valueObject;

    return new KitDomainEntityBase({
      model: model.valueOf(),
    });
  }

  private executeOrderAggregateRoot(
    entity: KitDomainEntityBase
  ): Promise<KitDomainEntityBase | null> {
    return this.orderAggregateRoot.createKit(entity);
  }
}

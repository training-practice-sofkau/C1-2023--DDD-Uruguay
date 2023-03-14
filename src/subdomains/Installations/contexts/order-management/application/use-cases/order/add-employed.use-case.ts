import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '../../../../../../../libs/sofka';
import { OrderAggregate } from '../../../domain/aggregates';
import { EmployedDomainEntityBase } from '../../../domain/entities';
import { IEmployedDomainEntity } from '../../../domain/entities/interfaces';
import { RegisteredOrderEventPublisherBase } from '../../../domain/events';
import {
  IcreateEmployedCommand,
} from '../../../domain/interfaces/commands/order';
import {
  IcreateEmployedResponse,
} from '../../../domain/interfaces/responses/order';
import { IOrderDomainService } from '../../../domain/services';
import {
  EmployedNameValueObject,
  EmployedPhoneValueObject,
} from '../../../domain/value-objects';

export class createEmployedUseCase<
    Command extends IcreateEmployedCommand = IcreateEmployedCommand,
    Response extends IcreateEmployedResponse = IcreateEmployedResponse
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
  ): Promise<EmployedDomainEntityBase | null> {
    const ValueObject = this.createValueObject(command);
    this.validateValueObject(ValueObject);
    const entity = this.createEntityEmployedDomain(ValueObject);
    return this.executeOrderAggregateRoot(entity);
  }

  private createValueObject(command: Command): IEmployedDomainEntity {
    const name = new EmployedNameValueObject(command.name);
    const phone = new EmployedPhoneValueObject(command.phone);

    return {
      name,
      phone,
    };
  }

  private validateValueObject(valueObject: IEmployedDomainEntity): void {
    const { name, phone } = valueObject;

    if (name instanceof EmployedNameValueObject && name.hasErrors())
      this.setErrors(name.getErrors());

    if (phone instanceof EmployedPhoneValueObject && phone.hasErrors())
      this.setErrors(phone.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por createEmployedUserCase",
        this.getErrors()
      );
  }

  private createEntityEmployedDomain(
    valueObject: IEmployedDomainEntity
  ): EmployedDomainEntityBase {
    const { name, phone } = valueObject;

    return new EmployedDomainEntityBase({
      name: name.valueOf(),
      phone: phone.valueOf(),
    });
  }

  private executeOrderAggregateRoot(
    entity: EmployedDomainEntityBase
  ): Promise<EmployedDomainEntityBase | null> {
    return this.orderAggregateRoot.createEmployed(entity);
  }
}

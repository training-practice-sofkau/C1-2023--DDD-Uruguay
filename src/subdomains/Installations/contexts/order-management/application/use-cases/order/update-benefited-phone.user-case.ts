import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '../../../../../../../libs/sofka';
import { OrderAggregate } from '../../../domain/aggregates';
import { FeeDomainEntityBase } from '../../../domain/entities';
import { CreatedOrderEventPublisherBase } from '../../../domain/events';
import {
  IUpdateBenefitedPhoneCommand,
} from '../../../domain/interfaces/commands/order';
import {
  IUpdateBenefitedPhoneResponse,
} from '../../../domain/interfaces/responses/order';
import { IOrderDomainService } from '../../../domain/services';
import { BenefitedPhoneValueObject } from '../../../domain/value-objects';
import { GetOrderUserCase } from './';

export class UpdateBenefitedPhoneUseCase<
    Command extends IUpdateBenefitedPhoneCommand = IUpdateBenefitedPhoneCommand,
    Response extends IUpdateBenefitedPhoneResponse = IUpdateBenefitedPhoneResponse
  >
  extends ValueObjectErrorHandler
  implements IUseCase<Command, Response>
{
  private readonly orderAggregateRoot: OrderAggregate;

  constructor(
    private readonly orderService: IOrderDomainService,
    private readonly orderGet: GetOrderUserCase,
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
  ): Promise<FeeDomainEntityBase | null> {
    this.validateObjectValue(command.phone);
    const order = await this.orderGet.execute({ orderId: command.orderId });
    if (order.success) {
      order.data.benefited.phone = command.phone;
      return order.data.benefited;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateBenefitedPhoneUserCase"
      );
  }

  private validateObjectValue(valueObject: BenefitedPhoneValueObject): void {
    if (
      valueObject instanceof BenefitedPhoneValueObject &&
      valueObject.hasErrors()
    )
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateBenefitedPhoneUserCase",
        this.getErrors()
      );
  }
}

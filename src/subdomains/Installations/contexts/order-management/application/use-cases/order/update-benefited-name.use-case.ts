import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from "../../../../../../../libs/sofka";
import { OrderAggregate } from "../../../domain/aggregates";
import { FeeDomainEntityBase } from "../../../domain/entities";
import { RegisteredOrderEventPublisherBase } from "../../../domain/events";
import { IUpdateBenefitedNameCommand } from "../../../domain/interfaces/commands/order";
import { IUpdateBenefitedNameResponse } from "../../../domain/interfaces/responses/order";
import { IOrderDomainService } from "../../../domain/services";
import { BenefitedNameValueObject } from "../../../domain/value-objects";
import { GetOrderUserCase } from "./";

export class UpdateBenefitedNameUseCase<
    Command extends IUpdateBenefitedNameCommand = IUpdateBenefitedNameCommand,
    Response extends IUpdateBenefitedNameResponse = IUpdateBenefitedNameResponse
  >
  extends ValueObjectErrorHandler
  implements IUseCase<Command, Response>
{
  private readonly orderAggregateRoot: OrderAggregate;

  constructor(
    private readonly orderService: IOrderDomainService,
    private readonly orderGet: GetOrderUserCase,
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
  ): Promise<FeeDomainEntityBase | null> {
    this.validateObjectValue(command.name);
    const order = await this.orderGet.execute({ orderId: command.orderId });
    if (order.success) {
      order.data.benefited.name = command.name;
      return order.data.benefited;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateBenefitedNameUserCase"
      );
  }

  private validateObjectValue(valueObject: BenefitedNameValueObject): void {
    if (
      valueObject instanceof BenefitedNameValueObject &&
      valueObject.hasErrors()
    )
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateBenefitedNameUserCase",
        this.getErrors()
      );
  }
}

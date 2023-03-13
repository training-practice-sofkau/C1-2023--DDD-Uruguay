import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from "../../../../../../../libs/sofka";
import { OrderAggregate } from "../../../domain/aggregates";
import { FeeDomainEntityBase } from "../../../domain/entities";
import { RegisteredOrderEventPublisherBase } from "../../../domain/events";
import { IUpdateEmployedNameCommand } from "../../../domain/interfaces/commands/order";
import { IUpdateEmployedNameResponse } from "../../../domain/interfaces/responses/order";
import { IOrderDomainService } from "../../../domain/services";
import { EmployedNameValueObject } from "../../../domain/value-objects";
import { GetOrderUserCase } from "./";

export class UpdateEmployedNameUseCase<
    Command extends IUpdateEmployedNameCommand = IUpdateEmployedNameCommand,
    Response extends IUpdateEmployedNameResponse = IUpdateEmployedNameResponse
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
      order.data.employed.name = command.name;
      return order.data.employed;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateEmployedNameUserCase"
      );
  }

  private validateObjectValue(valueObject: EmployedNameValueObject): void {
    if (
      valueObject instanceof EmployedNameValueObject &&
      valueObject.hasErrors()
    )
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateEmployedNameUserCase",
        this.getErrors()
      );
  }
}

import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from "../../../../../../../libs/sofka";
import { InvoiceAggregate } from "../../../domain/aggregates";
import { FeeDomainEntityBase } from "../../../domain/entities";
import { RegisteredInvoiceEventPublisherBase } from "../../../domain/events";
import { IUpdateFeeChargeCommand } from "../../../domain/interfaces/commands/invoice";
import { IUpdateFeeChargeResponse } from "../../../domain/interfaces/responses/invoice";
import { IInvoiceDomainService } from "../../../domain/services";
import { FeeChargeValueObject } from "../../../domain/value-objects";
import { GetInvoiceUserCase } from "./";

export class UpdateFeeChargeUseCase<
    Command extends IUpdateFeeChargeCommand = IUpdateFeeChargeCommand,
    Response extends IUpdateFeeChargeResponse = IUpdateFeeChargeResponse
  >
  extends ValueObjectErrorHandler
  implements IUseCase<Command, Response>
{
  private readonly invoiceAggregateRoot: InvoiceAggregate;

  constructor(
    private readonly invoiceService: IInvoiceDomainService,
    private readonly invoiceGet: GetInvoiceUserCase,
    private readonly registeredInvoiceEventPublisherBase: RegisteredInvoiceEventPublisherBase
  ) {
    super();
    this.invoiceAggregateRoot = new InvoiceAggregate({
      invoiceService,
      registeredInvoiceEventPublisherBase,
    });
  }

  async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response;
  }

  private async executeCommand(
    command: Command
  ): Promise<FeeDomainEntityBase | null> {
    this.validateObjectValue(command.charge);
    const invoice = await this.invoiceGet.execute({
      invoiceId: command.invoiceId,
    });
    if (invoice.success) {
      invoice.data.fee.charge = command.charge;
      return invoice.data.fee;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateFeeChargeUserCase"
      );
  }

  private validateObjectValue(valueObject: FeeChargeValueObject): void {
    if (valueObject instanceof FeeChargeValueObject && valueObject.hasErrors())
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateFeeChargeUserCase",
        this.getErrors()
      );
  }
}

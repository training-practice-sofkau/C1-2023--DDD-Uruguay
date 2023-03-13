import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from "../../../../../../../libs/sofka";
import { InvoiceAggregate } from "../../../domain/aggregates";
import { FeeDomainEntityBase } from "../../../domain/entities";
import { RegisteredInvoiceEventPublisherBase } from "../../../domain/events";
import { IUpdateFeeTaxCommand } from "../../../domain/interfaces/commands/invoice";
import { IUpdateFeeTaxResponse } from "../../../domain/interfaces/responses/invoice";
import { IInvoiceDomainService } from "../../../domain/services";
import { FeeTaxValueObject } from "../../../domain/value-objects";
import { GetInvoiceUserCase } from "./";

export class UpdateFeeTaxUseCase<
    Command extends IUpdateFeeTaxCommand = IUpdateFeeTaxCommand,
    Response extends IUpdateFeeTaxResponse = IUpdateFeeTaxResponse
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
    this.validateObjectValue(command.tax);
    const invoice = await this.invoiceGet.execute({
      invoiceId: command.invoiceId,
    });
    if (invoice.success) {
      invoice.data.fee.tax = command.tax;
      return invoice.data.fee;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateFeeTaxUserCase"
      );
  }

  private validateObjectValue(valueObject: FeeTaxValueObject): void {
    if (valueObject instanceof FeeTaxValueObject && valueObject.hasErrors())
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateFeeTaxUserCase",
        this.getErrors()
      );
  }
}

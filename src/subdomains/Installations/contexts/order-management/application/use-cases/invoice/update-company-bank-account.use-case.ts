import {
  AggregateUpdateException,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from "../../../../../../../libs/sofka";
import { InvoiceAggregate } from "../../../domain/aggregates";
import { CompanyDomainEntityBase } from "../../../domain/entities";
import { RegisteredInvoiceEventPublisherBase } from "../../../domain/events";
import { IUpdateCompanyBankAccountCommand } from "../../../domain/interfaces/commands/invoice";
import { IUpdateCompanyBankAccountResponse } from "../../../domain/interfaces/responses/invoice";
import { IInvoiceDomainService } from "../../../domain/services";
import { CompanyBankAccountValueObject } from "../../../domain/value-objects";
import { GetInvoiceUserCase } from "./";

export class UpdateCompanyNameUseCase<
    Command extends IUpdateCompanyBankAccountCommand = IUpdateCompanyBankAccountCommand,
    Response extends IUpdateCompanyBankAccountResponse = IUpdateCompanyBankAccountResponse
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
  ): Promise<CompanyDomainEntityBase | null> {
    this.validateObjectValue(command.bankAccount);
    const invoice = await this.invoiceGet.execute({
      invoiceId: command.invoiceId,
    });
    if (invoice.success) {
      invoice.data.company.bankAccount = command.bankAccount;
      return invoice.data.company;
    } else
      throw new AggregateUpdateException(
        "Hay algunos errores en el comando ejecutado por UpdateCompanyBankAccountUserCase"
      );
  }

  private validateObjectValue(
    valueObject: CompanyBankAccountValueObject
  ): void {
    if (
      valueObject instanceof CompanyBankAccountValueObject &&
      valueObject.hasErrors()
    )
      this.setErrors(valueObject.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por UpdateCompanyBankAccountUserCase",
        this.getErrors()
      );
  }
}

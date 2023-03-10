import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '../../../../../../../libs/sofka';

import { IInvoiceDomainService } from '../../../domain/services';
import { RegisteredInvoiceEventPublisherBase } from '../../../domain/events';
import { CompanyDomainEntityBase } from '../../../domain/entities';
import { CompanyBankAccountValueObject } from '../../../domain/value-objects';
import { InvoiceAggregate } from '../../../domain/aggregates';
import { IUpdateCompanyBankAccountCommand } from '../../../domain/interfaces/commands/invoice';
import { IUpdateCompanyBankAccountResponse } from '../../../domain/interfaces/responses/invoice';

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
        private readonly registeredInvoiceEventPublisherBase: RegisteredInvoiceEventPublisherBase,
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            invoiceService,
            registeredInvoiceEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<CompanyDomainEntityBase | null> {
        this.validateObjectValue(command.bankAccount);
        command.domain.company.bankAccount = command.bankAccount;
        return command.domain.company;
    }

    private validateObjectValue(valueObject: CompanyBankAccountValueObject): void {

        if (valueObject instanceof CompanyBankAccountValueObject && valueObject.hasErrors())
            this.setErrors(valueObject.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateCompanyNameUserCase',
                this.getErrors(),
            );

    }

}
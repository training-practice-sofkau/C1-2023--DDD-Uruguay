import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '../../../../../../../libs/sofka';

import { IInvoiceDomainService } from '../../../domain/services';
import { RegisteredInvoiceEventPublisherBase } from '../../../domain/events';
import { CompanyDomainEntityBase } from '../../../domain/entities';
import { CompanyNameValueObject } from '../../../domain/value-objects';
import { InvoiceAggregate } from '../../../domain/aggregates';
import { IUpdateCompanyNameCommand } from '../../../domain/interfaces/commands/invoice';
import { IUpdateCompanyNameResponse } from '../../../domain/interfaces/responses/invoice';
import { GetInvoiceUserCase } from '.';

export class UpdateCompanyNameUseCase<
    Command extends IUpdateCompanyNameCommand = IUpdateCompanyNameCommand,
    Response extends IUpdateCompanyNameResponse = IUpdateCompanyNameResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly invoiceGet: GetInvoiceUserCase,
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
        this.validateObjectValue(command.name);
        const invoice = await this.invoiceGet.execute({ invoiceId: command.invoiceId });
        invoice.data.company.name = command.name;
        return invoice.data.company;
    }

    private validateObjectValue(valueObject: CompanyNameValueObject): void {

        if (valueObject instanceof CompanyNameValueObject && valueObject.hasErrors())
            this.setErrors(valueObject.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateCompanyNameUserCase',
                this.getErrors(),
            );

    }

}
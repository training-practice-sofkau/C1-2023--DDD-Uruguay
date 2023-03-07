import { ICreateInvoiceCommand } from '../../../../interfaces/commands/invoice/create-invoice.command';
import { IInvoiceDomainService } from '../../../../services/invoice/invoice.domain-service';
import { InvoiceCreatedEventPublisherBase } from '../../../../events/publishers/invoice/invoice-created.event-publisher';

export const CreateInvoice = async (
    invoiceData: ICreateInvoiceCommand,
    invoiceService: IInvoiceDomainService,
    invoiceCreatedEventPublisherBase: InvoiceCreatedEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.createInvoice(invoiceData);
    invoiceCreatedEventPublisherBase.response = result;
    invoiceCreatedEventPublisherBase.publish();

    return result;
}

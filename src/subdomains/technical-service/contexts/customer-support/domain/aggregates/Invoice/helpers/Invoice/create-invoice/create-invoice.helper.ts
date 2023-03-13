import { InvoiceDomainEntityBase } from '../../../../../entities/invoice/invoice.domain-entity';
import { InvoiceCreatedEventPublisherBase } from '../../../../../events/publishers';
import { IInvoiceDomainService } from '../../../../../services/invoice';

export const CreateInvoice = async (
    invoiceData: InvoiceDomainEntityBase,
    invoiceService: IInvoiceDomainService,
    invoiceCreatedEventPublisherBase: InvoiceCreatedEventPublisherBase
): Promise< InvoiceDomainEntityBase | null > => {

    const result = await invoiceService.createInvoice(invoiceData);
    invoiceCreatedEventPublisherBase.response = result;
    invoiceCreatedEventPublisherBase.publish();

    return result;
}

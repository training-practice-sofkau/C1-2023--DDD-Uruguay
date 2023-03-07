import { IInvoiceDomainService } from '../../../../services/invoice.domain-service';
import { InvoiceMarkedAsPaidEventPublisherBase } from '../../../../events/publishers/invoice/marked-as-paid.event-publisher';

export const MarkInvoiceAsPaid = async (    
    invoiceService: IInvoiceDomainService,
    invoiceMarkedAsPaidEventPublisherBase: InvoiceMarkedAsPaidEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.MarkAsPaid();
    invoiceMarkedAsPaidEventPublisherBase.response = result;
    invoiceMarkedAsPaidEventPublisherBase.publish();

    return result;
}


import { InvoiceDomainEntityBase } from '../../../../../entities/invoice/invoice.domain-entity';
import { InvoiceMarkedAsPaidEventPublisherBase } from '../../../../../events';
import { IInvoiceDomainService } from '../../../../../services';

export const MarkInvoiceAsPaid = async (    
    data: InvoiceDomainEntityBase,
    invoiceService: IInvoiceDomainService,
    invoiceMarkedAsPaidEventPublisherBase: InvoiceMarkedAsPaidEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.MarkAsPaid(data);
    invoiceMarkedAsPaidEventPublisherBase.response = result;
    invoiceMarkedAsPaidEventPublisherBase.publish();

    return result;
}

import { InvoiceDomainEntity } from "../../../../entities";
import { InvoiceAddedEventPublisher } from "../../../../events";
import { IAddInvoice } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const AddInvoice = async (
    invoice: IAddInvoice,
    checkOutService: ICheckOutDomainService,
    invoiceAddedEventPublisher: InvoiceAddedEventPublisher
): Promise<InvoiceDomainEntity | null> => {
    const result = await checkOutService.addInvoice(invoice);
    invoiceAddedEventPublisher.response = result;
    invoiceAddedEventPublisher.publish();
    return result;
}

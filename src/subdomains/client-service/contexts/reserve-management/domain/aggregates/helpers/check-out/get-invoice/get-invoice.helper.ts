import { InvoiceDomainEntity } from "../../../../entities";
import { InvoiceObtainedEventPublisher } from "../../../../events";
import { ICheckOutDomainService } from "../../../../services";

export const GetInvoice = async (
    data: string,
    checkOutService: ICheckOutDomainService,
    invoiceObtainedEventPublisher: InvoiceObtainedEventPublisher
): Promise<InvoiceDomainEntity | null> => {
    const result = await checkOutService.getInvoice(data);
    invoiceObtainedEventPublisher.response = result;
    invoiceObtainedEventPublisher.publish();
    return result;
}

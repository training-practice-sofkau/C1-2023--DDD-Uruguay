import { InvoiceDomainEntityBase } from "../../entities";
import { RegisteredInvoiceEventPublisherBase } from "../../events";
import { IInvoiceDomainService } from "../../services";

export const CreateInvoice = async (
  invoice: InvoiceDomainEntityBase,
  invoiceService: IInvoiceDomainService,
  registeredInvoiceEventPublisher: RegisteredInvoiceEventPublisherBase
): Promise<InvoiceDomainEntityBase | null> => {
  const result = await invoiceService.createInvoice(invoice);
  registeredInvoiceEventPublisher.response = result;
  registeredInvoiceEventPublisher.publish();
  return result;
};

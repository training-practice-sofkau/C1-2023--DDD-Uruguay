import { InvoiceGeneratedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { IGenerateInvoiceCommand } from "../../../../interfaces/commands/support-ticket";
import { ISupportTicketDomainService } from "../../../../services";

export const GenerateInvoice = async (
    ticketData: IGenerateInvoiceCommand,
    supportTicketService: ISupportTicketDomainService,
    invoiceGeneratedEventPublisherBase: InvoiceGeneratedEventPublisherBase
): Promise<boolean> => {

    const result = await supportTicketService.GenerateInvoice(ticketData);
    invoiceGeneratedEventPublisherBase.response = result;
    invoiceGeneratedEventPublisherBase.publish();

    return result;
}

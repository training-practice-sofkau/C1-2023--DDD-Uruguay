import { ICloseTicketCommand, IGenerateInvoiceCommand } from '../../interfaces';
import { IOpenNewTicketCommand } from '../../interfaces/commands/support-ticket/open-new-ticket.command';
export interface ISupportTicketDomainService {

    OpenNewTicket(ticketData: IOpenNewTicketCommand): Promise < boolean >;

    CloseTicket(ticketData: ICloseTicketCommand): Promise < boolean >;

    GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise < boolean >;

}
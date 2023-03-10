import { ISupportTicketEntity } from '../../entities/interfaces';
import { ICloseTicketCommand, IGenerateInvoiceCommand } from '../../interfaces';
import { IOpenNewTicketCommand } from '../../interfaces/commands/support-ticket/open-new-ticket.command';

export interface ISupportTicketDomainService {

    OpenNewTicket(ticketData: ISupportTicketEntity): Promise < ISupportTicketEntity | null >;

    CloseTicket(ticketData: ICloseTicketCommand): Promise < boolean >;

    GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise < boolean >;

}
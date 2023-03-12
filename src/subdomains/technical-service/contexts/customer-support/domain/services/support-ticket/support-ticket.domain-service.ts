import { ISupportTicketEntity } from '../../entities/interfaces';
import { SupportTicketDomainEntityBase } from '../../entities/support-ticket/service-ticket.domain-entity';
import { IGenerateInvoiceCommand } from '../../interfaces';

export interface ISupportTicketDomainService {

    OpenNewTicket(ticketData: ISupportTicketEntity): Promise < ISupportTicketEntity | null >;

    CloseTicket(ticketData: SupportTicketDomainEntityBase): Promise < boolean >;

    GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise < boolean >;

}
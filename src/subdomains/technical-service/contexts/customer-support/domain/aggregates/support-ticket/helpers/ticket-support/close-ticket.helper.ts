import { SupportTicketDomainEntityBase } from "../../../../entities/support-ticket/service-ticket.domain-entity";
import { SupportTicketClosedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { ISupportTicketDomainService } from "../../../../services";

export const CloseTicket = async (
    ticketData: SupportTicketDomainEntityBase,
    supportTicketService: ISupportTicketDomainService,
    ticketClosedEventPublisherBase: SupportTicketClosedEventPublisherBase
): Promise<boolean> => {

    const result = await supportTicketService.CloseTicket(ticketData);
    ticketClosedEventPublisherBase.response = result;
    ticketClosedEventPublisherBase.publish();

    return result;
}

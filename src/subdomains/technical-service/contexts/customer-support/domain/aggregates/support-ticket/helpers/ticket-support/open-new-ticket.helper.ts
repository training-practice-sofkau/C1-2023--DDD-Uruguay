import { ISupportTicketEntity } from "../../../../entities/interfaces";
import { NewTicketAddedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { ISupportTicketDomainService } from "../../../../services";

export const OpenNewTicket = async (
    ticketData: ISupportTicketEntity,
    supportTicketService: ISupportTicketDomainService,
    newTicketAddedEventPublisherBase: NewTicketAddedEventPublisherBase
): Promise<ISupportTicketEntity | null > => {

    const result = await supportTicketService.OpenNewTicket(ticketData);
    newTicketAddedEventPublisherBase.response = result;
    newTicketAddedEventPublisherBase.publish();

    return result;
}

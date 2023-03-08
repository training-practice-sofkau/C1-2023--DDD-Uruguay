import { NewTicketAddedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { IOpenNewTicketCommand } from "../../../../interfaces/commands/support-ticket";
import { ISupportTicketDomainService } from "../../../../services";

export const OpenNewTicket = async (
    ticketData: IOpenNewTicketCommand,
    supportTicketService: ISupportTicketDomainService,
    newTicketAddedEventPublisherBase: NewTicketAddedEventPublisherBase
): Promise<boolean> => {

    const result = await supportTicketService.OpenNewTicket(ticketData);
    newTicketAddedEventPublisherBase.response = result;
    newTicketAddedEventPublisherBase.publish();

    return result;
}

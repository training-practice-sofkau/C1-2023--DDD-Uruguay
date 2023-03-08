import { TicketClosedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { ICloseTicketCommand } from "../../../../interfaces/commands/support-ticket";
import { ISupportTicketDomainService } from "../../../../services";

export const CloseTicket = async (
    ticketData: ICloseTicketCommand,
    supportTicketService: ISupportTicketDomainService,
    ticketClosedEventPublisherBase: TicketClosedEventPublisherBase
): Promise<boolean> => {

    const result = await supportTicketService.CloseTicket(ticketData);
    ticketClosedEventPublisherBase.response = result;
    ticketClosedEventPublisherBase.publish();

    return result;
}

import { EventPublisherBase } from "@sofka";
import { ISupportTicketEntity } from "../../../entities/interfaces";
export abstract class NewTicketAddedEventPublisherBase < Response = ISupportTicketEntity | null  > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.new-ticket-added',
            JSON.stringify({ data: this.response })
        )
    }
}

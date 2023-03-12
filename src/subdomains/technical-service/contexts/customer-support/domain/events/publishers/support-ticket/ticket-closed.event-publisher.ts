import { EventPublisherBase } from "@sofka";
export abstract class SupportTicketClosedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.ticket-closed',
            JSON.stringify({ data: this.response })
        )
    }
}

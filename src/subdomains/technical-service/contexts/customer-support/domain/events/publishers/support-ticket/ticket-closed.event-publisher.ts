import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class TicketClosedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.ticket-closed',
            JSON.stringify({ data: this.response })
        )
    }
}

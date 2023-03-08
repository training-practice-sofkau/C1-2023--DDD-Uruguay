import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class NewTicketAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.new-ticket-added',
            JSON.stringify({ data: this.response })
        )
    }
}

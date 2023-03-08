import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class CustomerNotifiedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-notified',
            JSON.stringify({ data: this.response })
        )
    }
}

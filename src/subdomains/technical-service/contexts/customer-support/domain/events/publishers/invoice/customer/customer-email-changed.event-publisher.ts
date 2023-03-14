import { EventPublisherBase } from "@sofka";

export abstract class CustomerEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-email-changed',
            JSON.stringify({ data: this.response })
        )
    }
}

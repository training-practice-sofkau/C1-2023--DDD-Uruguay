import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class CustomerCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-created',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "../../../../../../../../../libs";

export abstract class CustomerEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'CustomerEmailChangedEventPublisher',
            JSON.stringify({ data: this.response })
        )
    }
}

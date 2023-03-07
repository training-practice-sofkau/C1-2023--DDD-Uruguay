import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class CustomerCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'CustomerCreatedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

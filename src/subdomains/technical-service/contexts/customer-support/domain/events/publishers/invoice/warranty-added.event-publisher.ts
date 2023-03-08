import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class WarrantyAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-added',
            JSON.stringify({ data: this.response })
        )
    }
}

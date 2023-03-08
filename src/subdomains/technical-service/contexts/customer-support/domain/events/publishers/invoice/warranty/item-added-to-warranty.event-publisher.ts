import { EventPublisherBase } from "src/libs";

export abstract class ItemAddedToWarrantyEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.item-added-to-warranty',
            JSON.stringify({ data: this.response })
        )
    }
}

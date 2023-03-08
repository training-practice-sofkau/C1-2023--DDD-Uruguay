import { EventPublisherBase } from "src/libs";

export abstract class ItemRemovedFromWarrantyEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.item-removed-from-warranty',
            JSON.stringify({ data: this.response })
        )
    }
}

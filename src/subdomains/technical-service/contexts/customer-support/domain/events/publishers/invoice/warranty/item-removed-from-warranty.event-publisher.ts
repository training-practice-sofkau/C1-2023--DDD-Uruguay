import { EventPublisherBase } from "src/libs";

export abstract class ItemRemovedFromWarrantyEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'ItemRemovedFromWarrantyEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}

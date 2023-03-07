import { EventPublisherBase } from "src/libs";

export abstract class ItemAddedToWarrantyEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'ItemAddedToWarrantyEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}

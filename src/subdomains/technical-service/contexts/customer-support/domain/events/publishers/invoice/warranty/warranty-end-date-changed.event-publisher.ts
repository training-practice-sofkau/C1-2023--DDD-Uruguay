import { EventPublisherBase } from "src/libs";

export abstract class WarrantyEndDateChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-end-date-changed',
            JSON.stringify({ data: this.response })
        )
    }
}

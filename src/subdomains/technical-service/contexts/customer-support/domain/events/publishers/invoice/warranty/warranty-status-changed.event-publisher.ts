import { EventPublisherBase } from "@sofka";

export abstract class WarrantyStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}

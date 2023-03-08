import { EventPublisherBase } from "src/libs";

export abstract class WarrantyStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'WarrantyStatusChangedEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}

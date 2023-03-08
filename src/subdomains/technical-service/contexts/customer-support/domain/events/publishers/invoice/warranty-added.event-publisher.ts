import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class WarrantyAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'WarrantyAddedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

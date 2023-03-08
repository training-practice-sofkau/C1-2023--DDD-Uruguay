import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class InvoiceCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'InvoiceCreatedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

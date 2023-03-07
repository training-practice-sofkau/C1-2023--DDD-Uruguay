import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class InvoiceGeneratedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'InvoiceGeneratedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class InvoiceMarkedAsPaidEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.invoice-marked-as-paid',
            JSON.stringify({ data: this.response })
        )
    }
}

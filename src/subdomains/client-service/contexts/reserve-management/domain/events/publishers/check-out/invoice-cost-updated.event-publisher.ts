import { EventPublisherBase } from "src/libs/sofka";

export abstract class InvoiceCostUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.invoice-cost-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
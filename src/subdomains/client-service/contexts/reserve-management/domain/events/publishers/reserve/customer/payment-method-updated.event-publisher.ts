import { EventPublisherBase } from "src/libs/sofka";

export abstract class PaymentMethodUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.payment-method-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
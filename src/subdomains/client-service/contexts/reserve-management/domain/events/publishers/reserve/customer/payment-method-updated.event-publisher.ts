import { EventPublisherBase } from "src/libs/sofka";

export abstract class PaymentMethodUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.payment-method-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
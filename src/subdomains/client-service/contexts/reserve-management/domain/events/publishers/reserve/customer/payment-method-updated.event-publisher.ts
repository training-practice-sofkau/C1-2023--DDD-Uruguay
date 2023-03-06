import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../../entities";

export abstract class PaymentMethodUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.payment-method-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
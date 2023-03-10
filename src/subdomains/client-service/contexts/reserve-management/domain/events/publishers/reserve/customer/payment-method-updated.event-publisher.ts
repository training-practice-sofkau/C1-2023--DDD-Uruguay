import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../../entities";

export abstract class PaymentMethodUpdatedEventPublisher<
    Response = CustomerDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.payment-method-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
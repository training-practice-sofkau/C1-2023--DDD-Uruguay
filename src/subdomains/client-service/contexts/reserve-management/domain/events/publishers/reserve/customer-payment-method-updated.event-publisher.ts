import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../entities";

export abstract class CustomerPaymentMethodUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.customer-payment-method-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
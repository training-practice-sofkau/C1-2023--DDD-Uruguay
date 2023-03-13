import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../entities";

export abstract class CustomerObtainedEventPublisher<
    Response = CustomerDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.customer-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
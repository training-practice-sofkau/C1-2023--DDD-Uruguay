import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../entities";

export abstract class CustomerAddedEventPublisher<
    Response = CustomerDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.customer-added',
            JSON.stringify({ data: this.response })
        )
    }
}
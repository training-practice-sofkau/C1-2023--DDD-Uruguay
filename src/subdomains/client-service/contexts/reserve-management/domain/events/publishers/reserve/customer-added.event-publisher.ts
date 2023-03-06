import { EventPublisherBase } from "src/libs/sofka";
import { CustomerDomainEntity } from "../../../entities";

export abstract class CustomerAddedEventPublisher<
    Response = CustomerDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.customer-added',
            JSON.stringify({ data: this.response })
        )
    }
}
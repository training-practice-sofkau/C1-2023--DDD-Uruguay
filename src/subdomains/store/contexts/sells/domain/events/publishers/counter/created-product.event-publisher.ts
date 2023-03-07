import { EventPublisherBase } from "src/libs";
import { ProductDomainEntity } from "../../../entities";

export abstract class CounterCreatedPosterEventPublisherBase<
    Response = ProductDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.product-created',
            JSON.stringify({ data: this.response })
        )
    }
}
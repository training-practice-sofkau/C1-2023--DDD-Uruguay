import { EventPublisherBase } from "src/libs";
import { ProductDomainEntity } from "../../../../entities";

export abstract class ProductUpdatedExpirationEventPublisherBase<
    Response = ProductDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.product-updated-expiration',
            JSON.stringify({ data: this.response })
        )
    }
}
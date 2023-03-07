import { EventPublisherBase } from "src/libs";
import { ProductDomainEntity } from "../../../../entities";

export abstract class ProductUpdatedPriceEventPublisherBase<
    Response = ProductDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.product-updated-price',
            JSON.stringify({ data: this.response })
        )
    }
}
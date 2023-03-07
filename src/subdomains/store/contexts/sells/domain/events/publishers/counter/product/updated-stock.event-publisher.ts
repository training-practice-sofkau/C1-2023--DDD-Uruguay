import { EventPublisherBase } from "src/libs";
import { ProductDomainEntity } from "../../../../entities";

export abstract class ProductUpdatedStockEventPublisherBase<
    Response = ProductDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.product-updated-stock',
            JSON.stringify({ data: this.response })
        )
    }
}
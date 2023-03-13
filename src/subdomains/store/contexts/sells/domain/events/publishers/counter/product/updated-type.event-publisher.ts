import { EventPublisherBase } from "src/libs";
import { ProductDomainEntity } from "../../../../entities";

export abstract class ProductUpdatedTypeEventPublisherBase<
    Response = ProductDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.product-updated-type',
            JSON.stringify({ data: this.response })
        )
    }
}
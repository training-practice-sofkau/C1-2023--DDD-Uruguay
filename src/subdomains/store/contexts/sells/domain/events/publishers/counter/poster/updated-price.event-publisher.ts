import { EventPublisherBase } from "src/libs";
import { PosterDomainEntity } from "../../../../entities";

export abstract class PosterUpdatedPriceEventPublisherBase<
    Response = PosterDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.poster-updated-price',
            JSON.stringify({ data: this.response })
        )
    }
}
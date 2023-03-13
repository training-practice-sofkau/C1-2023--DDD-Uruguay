import { EventPublisherBase } from "src/libs";
import { PosterDomainEntity } from "../../../../entities";

export abstract class PosterUpdatedTypeEventPublisherBase<
    Response = PosterDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.poster-updated-type',
            JSON.stringify({ data: this.response })
        )
    }
}
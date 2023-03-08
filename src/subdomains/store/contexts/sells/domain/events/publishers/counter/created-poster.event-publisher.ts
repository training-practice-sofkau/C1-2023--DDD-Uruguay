import { EventPublisherBase } from "src/libs";
import { PosterDomainEntity } from "../../../entities";

export abstract class CounterCreatedPosterEventPublisherBase<
    Response = PosterDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.poster-created',
            JSON.stringify({ data: this.response })
        )
    }
}
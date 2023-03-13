import { EventPublisherBase } from "src/libs";
import { PosterDomainEntity } from '../../../entities/poster/poster.domain-entity';

export abstract class GettedPosterEventPublisherBase<Response = PosterDomainEntity>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.counter-created',
            JSON.stringify({ data: this.response })
        )
    }
}
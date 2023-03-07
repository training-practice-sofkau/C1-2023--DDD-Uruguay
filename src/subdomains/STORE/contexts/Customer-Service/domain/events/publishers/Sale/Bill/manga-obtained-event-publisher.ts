import { EventPublisherBase } from "src/libs";
import { MangaDomainBase } from "../../../../entities/Order-domain/manga-domain-entity";

export class MangaObtainedEventPublisher  <
Response = MangaDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'event-publish',
            JSON.stringify({ data: this.response })
        )
}
}
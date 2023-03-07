import { EventPublisherBase } from 'src/libs';
import { MangaDomainBase } from '../../../entities/Order-domain/manga-domain-entity';
export class MangaModifiedEventPublisher <
Response = MangaDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-manga-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}
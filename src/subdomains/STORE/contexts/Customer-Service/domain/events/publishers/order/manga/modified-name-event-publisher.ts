import { EventPublisherBase } from 'src/libs';
import { MangaDomainBase } from '../../../../entities/Order-domain/manga-domain-entity';
export class NameMangaModifiedEventPublisher  <
Response = MangaDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-manga-name-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}
import { EventPublisherBase } from 'src/libs';
import { MangaDomainBase } from '../../../entities/Order-domain/manga-domain-entity';
export class MangaModifiedEventPublisher extends EventPublisherBase<MangaDomainBase>{
    publish(): void {
console.log("manga stock update")    }
}

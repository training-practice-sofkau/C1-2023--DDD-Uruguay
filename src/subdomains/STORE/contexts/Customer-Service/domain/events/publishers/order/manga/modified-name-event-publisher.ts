import { EventPublisherBase } from 'src/libs';
import { MangaDomainBase } from '../../../../entities/Order-domain/manga-domain-entity';
export class NameModifiedEventPublisher  extends EventPublisherBase<MangaDomainBase> {
    publish(): void {
       console.log("Nombre de maga modificado") 
    }
}

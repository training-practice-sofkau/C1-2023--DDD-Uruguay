import { EventPublisherBase } from "src/libs";
import { MangaDomainBase } from "../../../entities/Order-domain/manga-domain-entity";

export class MangaObtainedEventPublisher extends EventPublisherBase<MangaDomainBase> {
    publish(): void {
        console.log("Lista de manga obtained")
    }
}

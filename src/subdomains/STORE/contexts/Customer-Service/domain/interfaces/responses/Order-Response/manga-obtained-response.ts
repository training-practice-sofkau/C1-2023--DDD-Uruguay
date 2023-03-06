import { MangaDomainBase } from '../../../entities/Order-domain/manga-domain-entity';
export class MangaObtainedResponse {
    succes: boolean;
    data: MangaDomainBase | null 
}

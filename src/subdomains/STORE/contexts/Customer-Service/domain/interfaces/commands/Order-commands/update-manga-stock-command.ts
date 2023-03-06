import { MangaDomainBase } from '../../../entities/Order-domain/manga-domain-entity';
export class UpdateMangaStock {
    MangaId: string
    MangaData: Partial<MangaDomainBase>
}

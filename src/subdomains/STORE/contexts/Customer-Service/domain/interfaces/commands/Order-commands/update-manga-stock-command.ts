import { MangaDomainBase } from '../../../entities/Order-domain/manga-domain-entity';
export class UpdateMangaStock {
    ClientID: string
    ClientData: Partial<MangaDomainBase>
}

import { IdmangaValue, NameMangaValue, MangaSateValue, PriceValue, StockValue } from "../../value-objects";
import { IMangaEntity } from "../interfaces/Order/manga.interface";

export class MangaDomainBase implements IMangaEntity {
    Mangaid: IdmangaValue;
    Name: NameMangaValue;
    state: MangaSateValue;
    Price: PriceValue;
    Stock: StockValue;
}

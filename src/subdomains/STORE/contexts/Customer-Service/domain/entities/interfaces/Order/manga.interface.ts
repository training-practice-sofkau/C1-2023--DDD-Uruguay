import { IdmangaValue, MangaSateValue, NameMangaValue, PriceValue, StockValue } from "../../../value-objects";

export interface IMangaEntity {

    Mangaid?: IdmangaValue
    Name?: NameMangaValue
    state?: MangaSateValue
    Price?: PriceValue
    Stock?: StockValue

}

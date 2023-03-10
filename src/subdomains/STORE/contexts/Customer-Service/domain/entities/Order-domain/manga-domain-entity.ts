import { IdmangaValue, NameMangaValue, MangaSateValue, PriceValue, StockValue } from "../../value-objects";
import { IMangaEntity } from "../interfaces/Order/manga.interface";
import { v4 as uuidv4 } from 'uuid';

export class MangaDomainBase implements IMangaEntity {
    Mangaid?: IdmangaValue;
    Name?: NameMangaValue;
    state?: MangaSateValue;
    Price?: PriceValue;
    Stock?: StockValue;



    constructor (_data?: IMangaEntity){

        if(_data.Mangaid) this.Mangaid = _data.Mangaid
        
        else this.Mangaid = uuidv4()      

        if (_data?.Name) this.Name = _data.Name;

        if (_data?.Price) this.Price = _data.Price;
    
        if (_data?.state) this.state = _data.state;

        if (_data?.Stock) this.Stock = _data.Stock;


    }
}

import { IdOrdertValueObject } from '../../../value-objects/Order/Id-Order-value/id-order-value';
import { IClientEntity } from './client.interface';
import { IMangaEntity } from './manga.interface';
export interface IOrderentity {

    
    orderId?: string | IdOrdertValueObject
    client:  IClientEntity
    Manga: IMangaEntity


}
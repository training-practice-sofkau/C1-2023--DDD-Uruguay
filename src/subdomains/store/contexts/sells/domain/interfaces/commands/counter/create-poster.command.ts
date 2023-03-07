import { FlavourValueObject, IdValueObject, ImageValueObject, PosterTypeValueObject, PriceValueObject, StockValueObject } from "../../../value-objects";

export interface ICounterCreatePosterCommand{
    posterId: string | IdValueObject
    type: string | PosterTypeValueObject
    flavour: string | FlavourValueObject
    price: number | PriceValueObject
    stock: number | StockValueObject
    image: string | ImageValueObject
}
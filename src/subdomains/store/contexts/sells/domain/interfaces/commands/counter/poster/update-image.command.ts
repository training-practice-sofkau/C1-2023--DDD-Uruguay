import { IdValueObject, PosterTypeValueObject, FlavourValueObject, PriceValueObject, StockValueObject, ImageValueObject } from "../../../../value-objects"

export interface IPosterUpdateImageCommand{
    posterId: string | IdValueObject
    type: string | PosterTypeValueObject
    flavour: string | FlavourValueObject
    price: number | PriceValueObject
    stock: number | StockValueObject
    image: string | ImageValueObject
}
import { IdValueObject, PosterTypeValueObject, FlavourValueObject, PriceValueObject, StockValueObject, ImageValueObject } from "../../../../value-objects"

export interface IPosterUpdateImageCommand{
    posterId: string
    type: string
    flavour: string
    price: number
    stock: number
    image: string
}
import { IdValueObject, PriceValueObject } from "../../../../value-objects"

export interface IProductUpdatePriceCommand{
    productId: string | IdValueObject
    newPrice: number | PriceValueObject
}
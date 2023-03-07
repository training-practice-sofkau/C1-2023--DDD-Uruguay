import { IdValueObject } from "../../../../value-objects"

export interface IPosterUpdatePriceCommand{
    posterId: string | IdValueObject
    newPrice: string | IdValueObject
}
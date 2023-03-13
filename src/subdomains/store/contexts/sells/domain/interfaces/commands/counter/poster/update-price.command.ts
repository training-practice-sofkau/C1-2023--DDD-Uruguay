import { IdValueObject } from "../../../../value-objects"

export interface IPosterUpdatePriceCommand{
    posterId: string
    newPrice: number
}
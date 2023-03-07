import { FlavourValueObject, IdValueObject, ImageValueObject, PosterTypeValueObject, PriceValueObject, StockValueObject } from "../../value-objects";


export interface IPosterDomainEntity {
    posterId: string | IdValueObject
    type?: string | PosterTypeValueObject
    flavour?: string | FlavourValueObject
    price?: number | PriceValueObject
    stock?: number | StockValueObject
    image?: string | ImageValueObject
}

import { Flavour, FlavourValueObject, IdValueObject, ImageValueObject, ImgType, PosterTypeValueObject, PriceValueObject, StockValueObject } from "../../value-objects";

export interface IPosterDomainEntity {
    posterId?: string | IdValueObject
    type?: ImgType | PosterTypeValueObject
    flavour?: Flavour | FlavourValueObject
    price?: number | PriceValueObject
    stock?: number | StockValueObject
    image?: string | ImageValueObject
}

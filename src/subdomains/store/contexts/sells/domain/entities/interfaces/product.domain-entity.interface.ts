import { DateValueObject, DessertType, Flavour, FlavourValueObject, IdValueObject, PriceValueObject, ProductTypeValueObject, StockValueObject } from "../../value-objects";

export interface IProductDomainEntity {
    productId?: string | IdValueObject
    type?: DessertType | ProductTypeValueObject
    flavour?: Flavour | FlavourValueObject
    price?: number | PriceValueObject
    stock?: number | StockValueObject
    expirationDate?: Date | DateValueObject
}

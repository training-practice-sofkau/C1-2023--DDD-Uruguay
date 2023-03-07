import { DateValueObject, FlavourValueObject, IdValueObject, PriceValueObject, ProductTypeValueObject, StockValueObject } from "../../value-objects";

export interface IProductDomainEntity {
    productId: string | IdValueObject
    type: string | ProductTypeValueObject
    flavour: string | FlavourValueObject
    price: number | PriceValueObject
    stock: number | StockValueObject
    expirationDate: Date | DateValueObject
}

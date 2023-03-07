import { IdValueObject, ProductTypeValueObject, FlavourValueObject, PriceValueObject, StockValueObject, DateValueObject } from "../../../../value-objects";

export interface IProductUpdateStockCommand{
    productId: string | IdValueObject;
    type: string | ProductTypeValueObject;
    flavour: string | FlavourValueObject;
    price: number | PriceValueObject;
    stock: number | StockValueObject;
    expirationDate: Date | DateValueObject;
    newStock: number
}
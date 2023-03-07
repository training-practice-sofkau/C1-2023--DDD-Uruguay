import { IdValueObject, ProductTypeValueObject, FlavourValueObject, PriceValueObject, StockValueObject, DateValueObject } from "../../value-objects";
import { IProductDomainEntity } from "../interfaces";
import { v4 as uuid } from 'uuid';

export class Product implements IProductDomainEntity {
    productId: string | IdValueObject;
    type: string | ProductTypeValueObject;
    flavour: string | FlavourValueObject;
    price: number | PriceValueObject;
    stock: number | StockValueObject;
    expirationDate: Date | DateValueObject;

    constructor(data?: IProductDomainEntity) {
        if (data.productId) this.productId = data.productId
        else this.productId = uuid()
        if (data.flavour) this.flavour = data.flavour
        if (data.price) this.price = data.price
        if (data.stock) this.stock = data.stock
        if (data.type) this.type = data.type
        if (data.expirationDate) this.expirationDate = data.expirationDate
    }
}

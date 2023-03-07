import { ProductDomainEntity } from "../../../../entities"

export interface IProductUpdatePriceCommand{
    product: ProductDomainEntity
    newPrice: number
}
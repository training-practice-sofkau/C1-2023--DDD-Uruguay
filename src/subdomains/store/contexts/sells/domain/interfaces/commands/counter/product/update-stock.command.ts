import { ProductDomainEntity } from "../../../../entities"

export interface IProductUpdateStockCommand{
    product: ProductDomainEntity
    newStock: number
}
import { IProductDomainEntity, ProductDomainEntity } from "../entities"
import { IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces"

export interface IProductDomainService {
    updateStock(product: IProductUpdateStockCommand): ProductDomainEntity
    updateProductPrice(product: IProductUpdatePriceCommand): ProductDomainEntity
}
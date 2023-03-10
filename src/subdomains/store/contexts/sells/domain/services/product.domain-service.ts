import { IProductDomainEntity, ProductDomainEntity } from "../entities"
import { IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces"

export interface IProductDomainService {
    updateStock(product: IProductUpdateStockCommand): Promise<ProductDomainEntity>
    updateProductPrice(product: IProductUpdatePriceCommand): Promise<ProductDomainEntity>
}
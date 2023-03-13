import { ProductDomainEntity } from "../entities"
import { IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces"
import { IProductUpdateExpirationCommand } from "../interfaces/commands/counter/product/update-expiration.command"
import { IProductUpdateTypeCommand } from "../interfaces/commands/counter/product/update-type.command"

export interface IProductDomainService {
    updateStock(product: IProductUpdateStockCommand): Promise<ProductDomainEntity>
    updateProductPrice(product: IProductUpdatePriceCommand): Promise<ProductDomainEntity>
    updateProductType(product: IProductUpdateTypeCommand): Promise<ProductDomainEntity>
    updateProductExpiration(product: IProductUpdateExpirationCommand): Promise<ProductDomainEntity>
}
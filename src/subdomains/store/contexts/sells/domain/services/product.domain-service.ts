import { ProductDomainEntity } from "../entities"
import { IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces"
import { IProductUpdateExpirationCommand } from "../interfaces/commands/counter/product/update-expiration.command"
import { IProductUpdateTypeCommand } from "../interfaces/commands/counter/product/update-type.command"
import { ProductMySqlEntity } from '../../infrastructure/persistence/databases/mysql/entities/product.entity';

export interface IProductDomainService<T extends ProductMySqlEntity = ProductMySqlEntity> {
    updateStock(product: IProductUpdateStockCommand): Promise<T>
    updateProductPrice(product: IProductUpdatePriceCommand): Promise<T>
    updateProductType(product: IProductUpdateTypeCommand): Promise<T>
    updateProductExpiration(product: IProductUpdateExpirationCommand): Promise<T>
}
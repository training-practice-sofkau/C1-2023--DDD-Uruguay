export interface IProductDomainService<ProductDomainEntity> {
    updateStock(product: ProductDomainEntity, newStock: number): ProductDomainEntity
    updatePrice(product: ProductDomainEntity, newPrice: number): ProductDomainEntity
}
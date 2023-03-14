import { Injectable } from "@nestjs/common";
import { IProductDomainService, IProductUpdatePriceCommand, IProductUpdateStockCommand } from "src/subdomains/store/contexts/sells/domain";
import { IProductUpdateExpirationCommand } from "src/subdomains/store/contexts/sells/domain/interfaces/commands/counter/product/update-expiration.command";
import { IProductUpdateTypeCommand } from "src/subdomains/store/contexts/sells/domain/interfaces/commands/counter/product/update-type.command";
import { ProductMySqlEntity } from "../entities/product.entity";
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductMySqlService
    implements IProductDomainService<ProductMySqlEntity> {

    constructor(
        private readonly productRepository: ProductRepository,
    ) { }
    async updateStock(product: IProductUpdateStockCommand): Promise<ProductMySqlEntity> {
        const productToUpdate = await this.productRepository.findById(product.productId)
        return this.productRepository.update(product.productId, productToUpdate)
    }
    async updateProductPrice(product: IProductUpdatePriceCommand): Promise<ProductMySqlEntity> {
        const productToUpdate = await this.productRepository.findById(product.productId)
        return this.productRepository.update(product.productId, productToUpdate)
    }
    async updateProductType(product: IProductUpdateTypeCommand): Promise<ProductMySqlEntity> {
        const productToUpdate = await this.productRepository.findById(product.productId)
        return this.productRepository.update(product.productId, productToUpdate)
    }
    async updateProductExpiration(product: IProductUpdateExpirationCommand): Promise<ProductMySqlEntity> {
        const productToUpdate = await this.productRepository.findById(product.productId)
        return this.productRepository.update(product.productId, productToUpdate)
    }

    getProduct(productId: string): Promise<ProductMySqlEntity> {
        return this.productRepository.findById(productId)
    }
    registerProduct(product: ProductMySqlEntity): Promise<ProductMySqlEntity> {
        return this.productRepository.create(product);
    }
    updateProductName(productId: string, entity: ProductMySqlEntity): Promise<ProductMySqlEntity> {
        return this.productRepository.update(productId, entity)
    }
    updateProductPhone(productId: string, entity: ProductMySqlEntity): Promise<ProductMySqlEntity> {
        return this.productRepository.update(productId, entity)
    }
}
import { IProductDomainEntity, ITicketDomainEntity } from '../entities';
import { ProductDomainEntity } from '../entities/product/product.domain-entity';

export interface ClientDomainService {
    askRefound(ticket: ITicketDomainEntity): Promise<boolean>
    buy(ticket: ITicketDomainEntity): Promise<ProductDomainEntity>
    consultStock(product: IProductDomainEntity): Promise<number>
}
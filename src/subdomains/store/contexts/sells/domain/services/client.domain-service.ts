import { ProductDomainEntity } from '../entities/product/product.domain-entity';
import { TicketDomainEntity } from '../entities/ticket/ticket.domain-entity.ts';

export interface ClientDomainService {
    askRefound(ticket: TicketDomainEntity): Promise<boolean>
    buy(ticket: TicketDomainEntity): Promise<ProductDomainEntity>
    consultStock(product: ProductDomainEntity): Promise<number>
}
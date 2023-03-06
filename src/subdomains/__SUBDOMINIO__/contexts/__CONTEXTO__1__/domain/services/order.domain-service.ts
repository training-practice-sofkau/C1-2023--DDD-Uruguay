import { IOrderDomainEntity } from '../entities/interfaces';
import { OrderDomainEntityBase } from '../entities/order.domain-entity';

/**
 * 
 *
 * @export
 * @interface IOrderDomainService
 * @template T
 */
export interface IOrderDomainService<
    T extends OrderDomainEntityBase = OrderDomainEntityBase
> {

    createOrder(order: T): Promise<T>;
    getOrder(orderId: string): Promise<T>;
    updateDescriptio(orderId: string, newDescription: string): Promise<string>;
}
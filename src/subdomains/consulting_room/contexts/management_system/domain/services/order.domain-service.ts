import { OrderDomainEntityBase } from '../entities';

/**
 *
 *
 * @export
 * @interface IOrderDomainService
 * @template T
 */
export interface IOrderDomainService<
    T extends OrderDomainEntityBase = OrderDomainEntityBase,
> {
    /**
     *  find Order By Id
     *  
     * @param {string} orderId
     * @return {*}  {(Promise<T | null>)}
     * @memberof IOrderDomainService
     */
    getOrder(orderId: string): Promise<T | null>;

    /**
     *  create order 
     *
     * @param {T} order
     * @return {*}  {(Promise<T | null>)}
     * @memberof IOrderDomainService
     */
    createOrder(order: T): Promise<T | null>;

    /**
     *
     *
     * @param {string} orderId
     * @return {*}  {Promise<boolean>}
     * @memberof IOrderDomainService
     */
    deleteOrder(orderId: string): Promise<boolean>;
}
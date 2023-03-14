import { Injectable } from '@nestjs/common';

import { IOrderDomainService } from 'src/subdomains';
import { OrderMySqlEntity } from '../entities/order.entity';
import { OrderRepository } from '../repositories/order.repository';

@Injectable()
export class OrderMySqlService
    implements IOrderDomainService<OrderMySqlEntity> {

    constructor(
        private readonly orderRepository: OrderRepository
    ) { }

    getOrder(orderId: string): Promise<OrderMySqlEntity> {
        return this.orderRepository.findById(orderId)
    }
    createOrder(order: OrderMySqlEntity): Promise<OrderMySqlEntity> {
        return this.orderRepository.create(order)
    }
    deleteOrder(orderId: string): Promise<boolean> {
        return this.orderRepository.delete(orderId)
    }



}
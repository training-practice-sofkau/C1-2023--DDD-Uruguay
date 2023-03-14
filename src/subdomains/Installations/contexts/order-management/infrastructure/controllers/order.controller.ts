import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import {
  CreateOrderUseCase,
  GetOrderUserCase,
} from '../../application/use-cases';
import {
  CreatedOrderPublisher,
} from '../messaging/publisher/created-order.publisher';
import { OrderService } from '../persistence/services';
import {
  CreateOrderCommand,
  GetOrderCommand,
} from '../utils/commands';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly createdOrderEventPublisher: CreatedOrderPublisher,
    ) {}

    @Post('/create-order')
    async createOrder(@Body() command: CreateOrderCommand) {
        const useCase = new CreateOrderUseCase(
            this.orderService,
            this.createdOrderEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/get-order')
    async getOrder(@Body() command: GetOrderCommand) {
        const useCase = new GetOrderUserCase(
            this.orderService,
            this.createdOrderEventPublisher,
        );
        return await useCase.execute(command);
    }
  
}
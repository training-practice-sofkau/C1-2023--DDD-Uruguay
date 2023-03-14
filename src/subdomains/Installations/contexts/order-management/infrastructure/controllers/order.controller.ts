import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { CreateOrderUseCase } from '../../application/use-cases';
import {
  CreatedOrderPublisher,
} from '../messaging/publisher/created-order.publisher';
import { OrderService } from '../persistence/services';
import { CreateOrderCommand } from '../utils/commands';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly createdOrderEventPublisherBase: CreatedOrderPublisher,
    ) {}

    @Post('/add-order')
    async addOrder(@Body() command: CreateOrderCommand) {
        const useCase = new CreateOrderUseCase(
            this.orderService,
            this.createdOrderEventPublisherBase,
        );
        return await useCase.execute(command);
    }

  
}
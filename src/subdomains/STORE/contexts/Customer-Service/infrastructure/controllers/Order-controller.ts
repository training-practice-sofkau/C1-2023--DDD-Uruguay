import { Controller, Post, Body } from '@nestjs/common';
import { RegisterOrderCaseUse, AddCustomerCaseUse } from '../../application';
import { IAddClient } from '../../domain/interfaces/commands';
import {
  IClientAddEventPublisher,
  IOrderAddEventPublisher,
} from '../messaging/publisher/order';
import { ClientService, OrderService } from '../persitence';
import { IRegisterOrderCommand } from '../utils/commands/order/Iregister-order-comand';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly ClientService: ClientService,
    private readonly AddCustomerEventPublisher: IClientAddEventPublisher,

    private readonly registerOrderEventPublisher: IOrderAddEventPublisher,
  ) {}

  @Post('create-order')
  async orderRegister(@Body() command: IRegisterOrderCommand) {
    const useCase = new RegisterOrderCaseUse(
      this.orderService,
      this.registerOrderEventPublisher,
    );
    return await useCase.execute(command);
  }

  @Post('create-Customer')
  createCustomer(@Body() command: IAddClient) {
    const useCase = new AddCustomerCaseUse(
      this.orderService,
      this.AddCustomerEventPublisher,
    );
    return useCase.execute(command);
  }
  
}

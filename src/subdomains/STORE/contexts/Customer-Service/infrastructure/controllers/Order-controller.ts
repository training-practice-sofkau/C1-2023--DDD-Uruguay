import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegisterOrderCaseUse, AddCustomerCaseUse, GetMangaCaseUse } from '../../application';
import { IAddClient } from '../../domain/interfaces/commands';
import {
  IClientAddEventPublisher,
  IOrderAddEventPublisher,
} from '../messaging/publisher/order';
import { ClientService, OrderService } from '../persitence';
import { IaddClientCOmmand } from '../utils/commands/order/IaddClientCOmmand';
import { IRegisterOrderCommand } from '../utils/commands/order/Iregister-order-comand';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,

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


  
}

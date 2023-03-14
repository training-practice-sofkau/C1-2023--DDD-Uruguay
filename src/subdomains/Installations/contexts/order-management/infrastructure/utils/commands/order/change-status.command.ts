import { IsString } from 'class-validator';

import {
  IOrderChangeStatusCommand,
} from '../../../../domain/interfaces/commands/order';

export class OrderChangeStatusCommand implements IOrderChangeStatusCommand {
  @IsString()
  orderId: string;
}

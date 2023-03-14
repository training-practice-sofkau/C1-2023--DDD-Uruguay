import { IsString } from 'class-validator';

import { IGetOrderCommand } from '../../../domain/interfaces/commands';

export class GetOrderCommand implements IGetOrderCommand {
    @IsString()
    orderId: string;
}
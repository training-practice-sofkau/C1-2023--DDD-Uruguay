import { IsString } from 'class-validator';

import { IDeleteOrderCommand } from '../../../domain/interfaces/commands';

export class DeleteOrderCommand implements IDeleteOrderCommand {
    @IsString()
    orderId: string;
}
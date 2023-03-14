import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

import {
  ICreateBenefitedCommand,
  ICreateEmployedCommand,
  ICreateKitCommand,
  ICreateOrderCommand,
} from '../../../domain/interfaces/commands';

export class CreateOrderCommand implements ICreateOrderCommand {
    @IsString()
    orderId?: string;

    @IsBoolean()
    status?: boolean;

    @IsString()
    kit: ICreateKitCommand;

    @IsObject()
    employed: ICreateBenefitedCommand;

    @IsObject()
    benefited: ICreateEmployedCommand;

    @IsNumber()
    createdAt?: number | Date;

    @IsNumber()
    updatedAt?: number | Date;

    @IsNumber()
    deletedAt?: number | Date;
}
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import {
  ICreateCompanyCommand,
  ICreateFeeCommand,
  ICreateInvoiceCommand,
} from '../../../domain/interfaces/commands';

export class CreateInvoiceCommand implements ICreateInvoiceCommand {
    @ApiProperty()
    @IsString()
    invoiceId?: string;

    @ApiProperty()
    @IsBoolean()
    status?: boolean;

    @ApiProperty()
    @IsObject()
    company: ICreateCompanyCommand;

    @ApiProperty()
    @IsObject()
    fee: ICreateFeeCommand;

    @ApiProperty()
    @IsNumber()
    createdAt?: number | Date;

    @ApiProperty()
    @IsNumber()
    updatedAt?: number | Date;

    @ApiProperty()
    @IsNumber()
    deletedAt?: number | Date;
}
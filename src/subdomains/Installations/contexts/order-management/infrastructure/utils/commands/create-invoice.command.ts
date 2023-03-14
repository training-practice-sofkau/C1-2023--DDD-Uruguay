import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

import {
  ICreateCompanyCommand,
  ICreateFeeCommand,
  ICreateInvoiceCommand,
} from '../../../domain/interfaces/commands';

export class CreateInvoiceCommand implements ICreateInvoiceCommand {
    @IsString()
    invoiceId?: string;

    @IsBoolean()
    status?: boolean;

    @IsObject()
    company: ICreateCompanyCommand;

    @IsObject()
    fee: ICreateFeeCommand;

    @IsNumber()
    createdAt?: number | Date;

    @IsNumber()
    updatedAt?: number | Date;

    @IsNumber()
    deletedAt?: number | Date;
}
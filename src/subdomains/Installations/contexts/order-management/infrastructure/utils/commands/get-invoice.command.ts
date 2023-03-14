import { IsString } from 'class-validator';

import { IGetInvoiceCommand } from '../../../domain/interfaces/commands';

export class GetInvoiceCommand implements IGetInvoiceCommand {
    @IsString()
    invoiceId: string;
}
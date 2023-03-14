import { IsString } from 'class-validator';

import { IDeleteInvoiceCommand } from '../../../domain/interfaces/commands';

export class DeleteInvoiceCommand implements IDeleteInvoiceCommand {
    @IsString()
    invoiceId: string;
}
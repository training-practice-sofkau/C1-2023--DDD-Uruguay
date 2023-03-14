import { IsString } from 'class-validator';

import {
  IInvoiceChangeStatusCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class InvoiceChangeStatusCommand implements IInvoiceChangeStatusCommand {
  @IsString()
  invoiceId: string;
}

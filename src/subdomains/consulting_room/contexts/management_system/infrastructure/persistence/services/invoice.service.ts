import { Injectable } from '@nestjs/common';
import { InvoiceMySqlService } from '../databases/mysql/services/invoice.service';

@Injectable()
export class InvoiceService extends InvoiceMySqlService { }
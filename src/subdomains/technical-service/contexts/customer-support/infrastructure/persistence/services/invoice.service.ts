import { Injectable } from '@nestjs/common/';
import { InvoiceMySqlService } from '../databases/mysql';

@Injectable()
export class InvoiceService extends InvoiceMySqlService {}
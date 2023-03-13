import { Injectable } from '@nestjs/common/';
import { InvoiceMySqlService } from '../databases';

@Injectable()
export class InvoiceService extends InvoiceMySqlService {}
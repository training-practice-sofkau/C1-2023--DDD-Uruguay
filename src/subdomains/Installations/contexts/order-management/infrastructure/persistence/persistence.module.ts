import { Module } from '@nestjs/common';

import { MysqlModule } from './databases';
import {
  InvoiceService,
  OrderService,
} from './services';

@Module({
  imports: [MysqlModule],
  providers: [InvoiceService, OrderService],
  exports: [InvoiceService, OrderService],
})
export class PersistenceModule {}

import { Module } from '@nestjs/common';

import {
  OrderManagementModule,
} from './subdomains/Installations/contexts/order-management/infrastructure';

@Module({
  imports: [OrderManagementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

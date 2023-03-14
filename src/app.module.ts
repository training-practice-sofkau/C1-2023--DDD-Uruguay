import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  OrderManagementModule,
} from './subdomains/Installations/contexts/order-management/infrastructure';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env/development.env'
    }),
    OrderManagementModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

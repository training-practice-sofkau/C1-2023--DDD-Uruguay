import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevtoolsModule } from '@nestjs/devtools-integration';

import {
  OrderManagementModule,
} from './subdomains/Installations/contexts/order-management/infrastructure';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development'
    }),
    DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
  }),
    OrderManagementModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

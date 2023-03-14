import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { TechnicalServiceModule } from './subdomains/technical-service/contexts/customer-support/infrastructure/technical-service.module';

@Module({
  imports: [
    TechnicalServiceModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
    }),   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
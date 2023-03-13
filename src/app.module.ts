import { join } from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConsultoryModule } from './subdomains/consulting_room/contexts/management_system/infrastructure/consultory.module';

@Module({
  imports: [
    ConsultoryModule,
    ConfigModule.forRoot({
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

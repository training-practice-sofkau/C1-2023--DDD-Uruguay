import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ConsultoryModule } from './subdomains/area-deportiva/contexts/rrhh/infrastructure/consultory.module';

@Module({
  imports: [
    ConsultoryModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
        ),
      }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

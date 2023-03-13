import { Module } from '@nestjs/common';
import { join } from 'node:path';
import { ReserveManagementModule } from './subdomains';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ReserveManagementModule,
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
export class AppModule {}

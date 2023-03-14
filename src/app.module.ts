import { join } from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  EntregaADomicilioModule
} from './subdomains/servicio-al-cliente/contexts/entrega-a-domicilio/infrastructure';


@Module({
  imports: [
    EntregaADomicilioModule,
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

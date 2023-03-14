import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { PostgreSQLModule } from './subdomains/first-team-structure/contexts/first-team/infrastructure/persistence/databases/postgres/postgresql.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), 'environments', `.env.${process.env.SCOPE.trimEnd()}`)
      // envFilePath: '../environments/.env.dev',

    }),
    PostgreSQLModule,
    KafkaModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}

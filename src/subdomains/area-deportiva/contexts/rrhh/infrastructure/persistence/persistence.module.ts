import { Module } from '@nestjs/common';
import { MySqlModule } from './databases/mysql/mysql.module';

@Module({
  imports: [MySqlModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class PersistenceModule {}

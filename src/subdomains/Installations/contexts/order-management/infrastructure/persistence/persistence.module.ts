import { Module } from '@nestjs/common';

import {
  MongoModule,
  MysqlModule,
} from './databases';

@Module({
  imports: [MysqlModule, MongoModule],
  providers: [],
  exports: [],
})
export class PersistenceModule {}

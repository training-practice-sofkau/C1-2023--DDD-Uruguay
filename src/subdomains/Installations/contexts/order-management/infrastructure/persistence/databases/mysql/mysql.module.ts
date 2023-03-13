import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmMySqlConfigService } from './configs';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMySqlConfigService,
  }),
    TypeOrmModule.forFeature([
      
  ])
  ],
  providers: [],
  exports: [],
})
export class MysqlModule {}

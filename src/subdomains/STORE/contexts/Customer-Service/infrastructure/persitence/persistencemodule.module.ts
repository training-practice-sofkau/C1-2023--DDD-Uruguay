/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MysqlModule } from './databases/mysql/mysql.module';

@Module({
    imports: [MysqlModule],
    controllers: [],
    exports: [],
    providers: [],
})
export class PersistenceModuleModule {}

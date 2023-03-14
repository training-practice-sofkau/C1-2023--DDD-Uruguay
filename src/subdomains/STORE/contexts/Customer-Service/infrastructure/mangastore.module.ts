/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { OrderController } from './controllers/Order-controller';
import { PersistenceModuleModule } from './persitence/persistencemodule.module';

@Module({
    imports: [PersistenceModuleModule],
    controllers: [OrderController],
    providers: [],
})
export class MangaStoreModule {}

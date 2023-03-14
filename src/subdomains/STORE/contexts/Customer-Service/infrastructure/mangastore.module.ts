/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { OrderController } from './controllers/Order-controller';
import { MessagingModule } from './messaging/messaging.module';
import { PersistenceModuleModule } from './persitence/persistencemodule.module';

@Module({
    imports: [PersistenceModuleModule, MessagingModule,
],
    controllers: [OrderController],
    providers: [],
    exports:[]
})
export class MangaStoreModule {}

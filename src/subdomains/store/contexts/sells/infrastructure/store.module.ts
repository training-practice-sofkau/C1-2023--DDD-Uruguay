import { Module } from '@nestjs/common';
import { CounterController } from './controllers/counter.controller';
import { MessagingModule } from './messaging/messaging.module';
import { PersistanceModule } from './persistence/persistance.module';

@Module({
    imports: [PersistanceModule, MessagingModule],
    controllers: [CounterController],
    providers: [],
    exports: []
})
export class StoreModule { }

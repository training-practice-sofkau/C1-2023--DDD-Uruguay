import { Module } from '@nestjs/common';
import { CounterController } from './controllers/counter.controller';
import { PersistanceModule } from './persistence/persistance.module';

@Module({
    imports: [PersistanceModule],
    controllers: [CounterController],
    providers: [],
    exports: []
})
export class StoreModule { }

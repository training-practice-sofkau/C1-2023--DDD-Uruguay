import { Module } from "@nestjs/common";
import { PersistenceModule } from "./persistence/persistence.module";
import { MessagingModule } from './messaging/messaging.module';

@Module({
    imports: [
        PersistenceModule,
        MessagingModule,
    ],
    controllers:[],
    providers:[],
    exports:[]
})
export class TechnicalServiceModule {}
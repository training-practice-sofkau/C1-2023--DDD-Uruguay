/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PersistenceModule } from './persistence/persistence.module';
import { MessagingModule } from './messaging/messaging.module';
import { OrderController } from "./controllers/order.controller";

@Module({
    imports: [PersistenceModule, MessagingModule],
    controllers: [OrderController],
    providers: [],
    exports: [],
  })
  export class ConsultoryModule {}
   
import { Controller, Module } from "@nestjs/common";
import { OrderController } from "./controllers/order.controller";
import { PersistenceModule } from './persistence/persistence.module';

@Module({
    imports:[PersistenceModule],
    controllers:[OrderController],
    providers:[],
    exports:[]
})
export class ConsultoryModule{}
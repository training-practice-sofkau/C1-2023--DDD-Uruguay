import { Controller, Module } from "@nestjs/common";
import { PersistenceModule } from './persistence/persistence.module';
import { CheckInController, CheckOutController, ReserveController } from "./controllers";

@Module({
    imports:[PersistenceModule],
    controllers:[
        CheckInController,
        CheckOutController,
        ReserveController
    ],
    providers:[],
    exports:[]
})
export class ReserveManagementModule{}
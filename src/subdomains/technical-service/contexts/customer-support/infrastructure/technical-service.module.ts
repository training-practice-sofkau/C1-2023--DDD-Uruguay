import { Module } from "@nestjs/common";
import { PersistenceModule } from "./persistence/persistence.module";
import { MessagingModule } from './messaging/messaging.module';
import { EventRepository } from './persistence/databases/mysql/repositories/event.repository';

import { 
    DeviceController, 
    CustomerController, 
    EmployeeController, 
    RepairsController, 
    InvoiceController,
    WarrantyController,
    RoleController,
    SupportTicketController
} from "./controllers";

@Module({
    imports: [
        PersistenceModule,
        MessagingModule,
    ],
    controllers:[
        CustomerController,
        DeviceController,
        EmployeeController, 
        InvoiceController, 
        RepairsController, 
        RoleController,
        SupportTicketController, 
        WarrantyController
    ],
    providers:[],
    exports:[]
})
export class TechnicalServiceModule {}
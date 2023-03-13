import { Module } from "@nestjs/common";
import { MySqlModule } from "./databases/";
import { 
    InvoiceService, 
    DeviceService, 
    EmployeeService, 
    CustomerService,
    RepairsService,
    RoleService,
    SupportTicketService,
    WarrantyService
} from './services/';

@Module({
    imports: [MySqlModule],
    providers: [
        CustomerService,
        DeviceService,
        EmployeeService,
        InvoiceService,
        RepairsService,
        RoleService,
        SupportTicketService,
        WarrantyService
    ],
    exports: [
        CustomerService,
        DeviceService,
        EmployeeService,
        InvoiceService,
        RepairsService,
        RoleService,
        SupportTicketService,
        WarrantyService
    ]
})
export class PersistenceModule { }

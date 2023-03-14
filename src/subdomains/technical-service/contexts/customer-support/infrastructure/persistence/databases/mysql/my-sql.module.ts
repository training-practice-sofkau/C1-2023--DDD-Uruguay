import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";

import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';

import { 
    RepairsRepository, 
    InvoiceRepository,
    RoleRepository,
    SupportTicketRepository,
    WarrantyRepository,
    EmployeeRepository, 
    DeviceRepository, 
    CustomerRepository 
} from './repositories/';

import { 
    RepairsMySqlEntity, 
    DeviceMySqlEntity, 
    InvoiceMySqlEntity, 
    CustomerMySqlEntity,
    EmployeeMySqlEntity,
    WarrantyMySqlEntity,
    RoleMySqlEntity,
    SupportTicketMySqlEntity
} from './entities/';

import { 
    EmployeeMySqlService,
    DeviceMySqlService, 
    CustomerMySqlService,
    InvoiceMySqlService,
    RepairsMySqlService,
    RoleMySqlService,
    SupportTicketMySqlService,
    WarrantyMySqlService
} from './services/';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            CustomerMySqlEntity,
            InvoiceMySqlEntity,
            EmployeeMySqlEntity,
            DeviceMySqlEntity,
            RepairsMySqlEntity,
            RoleMySqlEntity,
            SupportTicketMySqlEntity,
            WarrantyMySqlEntity
        ]),
    ],
    controllers:[
        
    ],
    providers:[
        TypeOrmMySqlConfigService,
        CustomerMySqlService,
        DeviceMySqlService,
        EmployeeMySqlService,
        InvoiceMySqlService,
        RepairsMySqlService,
        RoleMySqlService,
        SupportTicketMySqlService,
        WarrantyMySqlService,

        CustomerRepository,
        DeviceRepository,
        EmployeeRepository,
        InvoiceRepository,
        RepairsRepository,
        RoleRepository,
        SupportTicketRepository,
        WarrantyRepository
    ],
    exports:[
        CustomerMySqlService,
        DeviceMySqlService,
        EmployeeMySqlService,
        InvoiceMySqlService,
        RepairsMySqlService,
        RoleMySqlService,
        SupportTicketMySqlService,
        WarrantyMySqlService,

        CustomerRepository,
        DeviceRepository,
        EmployeeRepository,
        InvoiceRepository,
        RepairsRepository,
        RoleRepository,
        SupportTicketRepository,
        WarrantyRepository
    ],
})
export class MySqlModule {}
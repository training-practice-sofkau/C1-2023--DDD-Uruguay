import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
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

import { CustomerMySqlService } from './services/customer.service';
import { CustomerRespository } from './repositories/customer.repository';
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
    providers:[
        CustomerMySqlService,


        CustomerRespository,
    ],
    exports:[
        CustomerMySqlService,


        CustomerRespository,
    ],
})
export class MySqlModule {}
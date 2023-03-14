import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CustomerMySqlEntity } from '../entities/customer.entity';
import { DeviceMySqlEntity } from '../entities/device.entity';
import { EmployeeMySqlEntity } from '../entities/employee.entity';
import { InvoiceMySqlEntity } from '../entities/invoice.entity';
import { RoleMySqlEntity } from '../entities/role.entity';
import { RepairsMySqlEntity } from '../entities/repairs.entity';
import { SupportTicketMySqlEntity } from '../entities/support-ticket.entity';
import { WarrantyMySqlEntity } from '../entities/warranty.entity';


@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password:  this.configService.get<string>('DB_PASSWORD'),
            database:  this.configService.get<string>('DB_NAME'),
            entities:[
                CustomerMySqlEntity, 
                DeviceMySqlEntity, 
                EmployeeMySqlEntity,
                InvoiceMySqlEntity,
                RoleMySqlEntity,
                RepairsMySqlEntity,
                SupportTicketMySqlEntity,
                WarrantyMySqlEntity
            ],
            synchronize: true,
        }
    }
}
//__dirname+'/../**/*.entity{.ts,.js}'], //
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ClientMySqlEntity } from "../entities";
import { OrderMySqlEntity } from '../entities/order.entity';
import { InvoiceMySqlEntity } from '../entities/invoice.entity';


@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
       return {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'order_db',
        entities: [
            ClientMySqlEntity,
            OrderMySqlEntity,
            InvoiceMySqlEntity,
        ],
        synchronize: true,
       }
    }
}
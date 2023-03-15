import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {
    CheckInMySqlEntity,
    CheckOutMySqlEntity,
    ConsumptionMySqlEntity,
    CustomerMySqlEntity,
    GuestMySqlEntity,
    InvoiceMySqlEntity,
    ReserveMySqlEntity,
    RoomMySqlEntity,
    RoomKeyMySqlEntity
} from "../entities";

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '12345',
            database: 'bd-ddd',
            entities: [
                CheckInMySqlEntity,
                CheckOutMySqlEntity,
                ConsumptionMySqlEntity,
                CustomerMySqlEntity,
                GuestMySqlEntity,
                InvoiceMySqlEntity,
                ReserveMySqlEntity,
                RoomMySqlEntity,
                RoomKeyMySqlEntity
            ],
            synchronize: true,
            logging: true,
        }
    }
}
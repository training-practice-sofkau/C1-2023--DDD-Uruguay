import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';

import {
  BenefitedMySqlEntity,
  CompanyMySqlEntity,
  EmployedMySqlEntity,
  FeeMySqlEntity,
  InvoiceMySqlEntity,
  KitMySqlEntity,
  OrderMySqlEntity,
} from '../entities';

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('MYSQL_DB_HOST'),
            port: this.configService.get<number>('MYSQL_DB_PORT'),
            username: this.configService.get<string>('MYSQL_DB_USER'),
            password:  this.configService.get<string>('MYSQL_DB_PASSWORD'),
            database:  this.configService.get<string>('MYSQL_DB_NAME'),
            entities: [BenefitedMySqlEntity, CompanyMySqlEntity, EmployedMySqlEntity, FeeMySqlEntity, KitMySqlEntity, InvoiceMySqlEntity, OrderMySqlEntity],
            synchronize: true,
        }
    }
}

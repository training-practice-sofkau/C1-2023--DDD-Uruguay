import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmMySqlConfigService } from './configs';
import {
  BenefitedMySqlEntity,
  CompanyMySqlEntity,
  EmployedMySqlEntity,
  FeeMySqlEntity,
  InvoiceMySqlEntity,
  KitMySqlEntity,
  OrderMySqlEntity,
} from './entities';
import {
  BenefitedRepository,
  CompanyRepository,
  EmployedRepository,
  FeeRepository,
  InvoiceRepository,
  KitRepository,
  OrderRepository,
} from './repositories';
import {
  BenefitedMySqlService,
  CompanyMySqlService,
  EmployedMySqlService,
  FeeMySqlService,
  InvoiceMySqlService,
  KitMySqlService,
  OrderMySqlService,
} from './services';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmMySqlConfigService,
      inject: [ConfigService],
    }),

    TypeOrmModule.forFeature([
      BenefitedMySqlEntity,
      CompanyMySqlEntity,
      EmployedMySqlEntity,
      FeeMySqlEntity,
      KitMySqlEntity,
      InvoiceMySqlEntity,
      OrderMySqlEntity
    ])
  ],
  providers: [
    BenefitedMySqlService,
    CompanyMySqlService,
    EmployedMySqlService,
    FeeMySqlService,
    InvoiceMySqlService,
    KitMySqlService,
    OrderMySqlService,

    BenefitedRepository,
    CompanyRepository,
    EmployedRepository,
    FeeRepository,
    InvoiceRepository,
    KitRepository,
    OrderRepository
  ],
  exports: [
    BenefitedMySqlService,
    CompanyMySqlService,
    EmployedMySqlService,
    FeeMySqlService,
    InvoiceMySqlService,
    KitMySqlService,
    OrderMySqlService,

    BenefitedRepository,
    CompanyRepository,
    EmployedRepository,
    FeeRepository,
    InvoiceRepository,
    KitRepository,
    OrderRepository
  ],
})
export class MysqlModule {}

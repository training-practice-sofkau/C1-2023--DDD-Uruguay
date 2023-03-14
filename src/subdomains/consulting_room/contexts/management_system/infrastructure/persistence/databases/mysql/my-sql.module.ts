import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import { ClientMySqlEntity } from './entities/client.entity';
import { InvoiceMySqlEntity } from './entities/invoice.entity';
import { OrderMySqlEntity } from './entities/order.entity';
import { InvoiceRepository } from './repositories/invoice.repository';
import { OrderRepository } from './repositories/order.repository';
import { ClientRepository } from './repositories/client.repository';
import { InvoiceMySqlService } from './services/invoice.service';
import { ClientMySqlService } from './services/client.service';
import { OrderMySqlService } from './services/order.service';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMySqlConfigService,
    }),
    TypeOrmModule.forFeature([
      InvoiceMySqlEntity,
      OrderMySqlEntity,
      ClientMySqlEntity,
      
    ]),
  ],
  controllers: [],
  providers: [
    InvoiceRepository,
    OrderRepository,
    ClientRepository,

    InvoiceMySqlService,
    ClientMySqlService,
    OrderMySqlService,

    
  ],
  exports: [
    InvoiceRepository,
    OrderRepository,
    ClientRepository,

    InvoiceMySqlService,
    ClientMySqlService,
    OrderMySqlService,

    
  ],
})
export class MySqlModule { }

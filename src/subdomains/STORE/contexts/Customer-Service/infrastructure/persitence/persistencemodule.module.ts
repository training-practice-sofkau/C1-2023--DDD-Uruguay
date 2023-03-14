/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MysqlModule } from './databases/mysql/mysql.module';
import { BillService, ClientService, MangaService, OrderService, SaleService, SellerService } from './services';

@Module({
    imports: [MysqlModule],
    exports: [ClientService, OrderService, BillService, SellerService,MangaService,SaleService],
    providers: [ ClientService, OrderService, BillService, SellerService,MangaService,SaleService],
})
export class PersistenceModuleModule {}

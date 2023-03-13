/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityDB } from './entities/Client-entity-db';
import { MangaEntityDb } from './entities/Manga-entity-db';
import { OrderEntityDb } from './entities/Order-entity-db';
import { ClientRepository } from './repositories/Client-Repository';
import { ClientMySqlService } from './services/IClient-Domain-Service';
import { TypeOrmMysqlConfigService } from './configs/type-orm.mysql.service';
import { saleEntityBd } from './entities/Sale-entity';
import { SellerEntityDB } from './entities/sellerEntityDb';
import { BillEntityDB } from './entities/Bill-entity';
import { MangaRepository } from './repositories/Manga-repository';
import { MangaMySqlService } from './services/IManga-Domain-Service';
import { OrdertMySqlService } from './services/IOrder-Domain-Service';
import { SaleMySqlService } from './services/ISale-Domain-Service';
import { BillMySqlService } from './services/IBill-Domain-Service';
import { SellerMySqlService } from './services/ISeller-Domain-Service';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        useClass: TypeOrmMysqlConfigService,
      }),
      TypeOrmModule.forFeature([
        ClientEntityDB,
        MangaEntityDb,
        OrderEntityDb,
        saleEntityBd,
        SellerEntityDB,
        BillEntityDB

      ]),
    ],
    controllers: [],
    providers: [
      TypeOrmMysqlConfigService,
      ClientMySqlService,
      ClientRepository,
      MangaRepository,
      MangaMySqlService,
      OrdertMySqlService,
      OrderEntityDb,
      saleEntityBd,
      SaleMySqlService,
      BillEntityDB,
      BillMySqlService,
      SellerEntityDB,
      SellerMySqlService
      
    ],
    exports: [ClientMySqlService, ClientRepository,   MangaRepository,
      MangaMySqlService,
      OrdertMySqlService,
      OrderEntityDb,
      saleEntityBd,
      SaleMySqlService,
      BillEntityDB,
      BillMySqlService,
      SellerEntityDB,
      SellerMySqlService],
  })
export class MysqlModule {}

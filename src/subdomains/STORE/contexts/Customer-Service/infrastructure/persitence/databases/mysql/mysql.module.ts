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

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        useClass: TypeOrmMysqlConfigService,
      }),
      TypeOrmModule.forFeature([
        ClientEntityDB,
        MangaEntityDb,
        OrderEntityDb
      ]),
    ],
    controllers: [],
    providers: [
      TypeOrmMysqlConfigService,
      ClientMySqlService,
      ClientRepository,
      
    ],
    exports: [ClientMySqlService, ClientRepository],
  })
export class MysqlModule {}

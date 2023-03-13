import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import { ClientMySqlEntity } from './entities/customer.entity';
import { InovoiceMySqlEntity } from './entities/room.entity';
import { OrderMySqlEntity } from './entities/reserve.entity';
import { ClientMySqlService } from './services/client.service';
import { ClientRepository } from './repositories/client.repository';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            ClientMySqlEntity,
            InovoiceMySqlEntity,
            OrderMySqlEntity,
        ])
    ],
    providers: [
        ClientMySqlService,

        ClientRepository,
    ],
    exports: [
        ClientMySqlService,

        ClientRepository,
    ]
})
export class MySqlModule { }
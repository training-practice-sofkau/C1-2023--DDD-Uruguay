import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import { ClientMySqlEntity } from './entities/client.entity';
import { InovoiceMySqlEntity } from './entities/invoice.entity';
import { OrderMySqlEntity } from './entities/order.entity';
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
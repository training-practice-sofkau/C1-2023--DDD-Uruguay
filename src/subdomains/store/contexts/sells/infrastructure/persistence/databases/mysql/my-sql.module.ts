import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    CounterMySqlEntity,
    PosterMySqlEntity,
    ProductMySqlEntity
} from './entities';
import {
    CounterRepository,
    PosterRepository,
    ProductRepository
} from './repositories';
import {
    PosterMySqlService,
    ProductMySqlService
} from './services';
import { CounterMySqlService } from './services/counter.service';



@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            PosterMySqlEntity,
            ProductMySqlEntity,
            CounterMySqlEntity
        ])
    ],
    providers: [
        TypeOrmMySqlConfigService,
        
        PosterMySqlService,
        ProductMySqlService,
        CounterMySqlService,

        ProductRepository,
        PosterRepository,
        CounterRepository
    ],
    exports: [
        PosterMySqlService,
        ProductMySqlService,
        CounterMySqlService,

        ProductRepository,
        PosterRepository,
        CounterRepository
    ]
})
export class MySqlModule { }
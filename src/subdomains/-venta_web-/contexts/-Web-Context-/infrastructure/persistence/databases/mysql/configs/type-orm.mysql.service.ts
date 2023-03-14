import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ClienteMySqlEntity, CursoMySqlEntity, PlanMySqlEntity, CuponMySqlEntity, CompraMySqlEntity, MembershipMySqlEntity } from "../entities";

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password:  'SYSTEM',
            database:  'ddd_bf_sofka',
            entities: [
                ClienteMySqlEntity,
                CursoMySqlEntity,
                PlanMySqlEntity,
                CuponMySqlEntity,
                CompraMySqlEntity,
                MembershipMySqlEntity  
            ],
            synchronize: true,
            logging: true
        }
    }
}

/*
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=SYSTEM
    DB_NAME=ddd_bf_sofka
*/
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_MYSQL_HOST'),
            port: this.configService.get<number>('DB_MYSQL_PORT'),
            username: this.configService.get<string>('DB_MYSQL_USER'),
            password:  this.configService.get<string>('DB_MYSQL_PASSWORD'),
            database:  this.configService.get<string>('DB_MYSQL_NAME'),
            entities: [ __dirname + '/../**/*.entity[.ts, .js]' ],
            synchronize: true,
        }
    }
}

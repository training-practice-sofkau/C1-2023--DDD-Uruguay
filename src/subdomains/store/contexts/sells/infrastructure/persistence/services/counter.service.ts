import { Injectable } from "@nestjs/common";
import { CounterMySqlEntity } from '../databases/mysql/entities/counter.entity';

@Injectable()
export class CounterService extends CounterMySqlEntity { }
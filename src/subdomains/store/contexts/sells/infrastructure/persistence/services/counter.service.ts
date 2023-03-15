import { Injectable } from "@nestjs/common";
import { CounterMySqlService } from "../databases/mysql/services/counter.service";

@Injectable()
export class CounterService extends CounterMySqlService { }
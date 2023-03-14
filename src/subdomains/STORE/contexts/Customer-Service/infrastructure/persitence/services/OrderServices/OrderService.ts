import { Injectable } from "@nestjs/common";
import { OrdertMySqlService } from "../../databases/mysql/services/IOrder-Domain-Service";


@Injectable()
export class OrderService extends OrdertMySqlService {  }
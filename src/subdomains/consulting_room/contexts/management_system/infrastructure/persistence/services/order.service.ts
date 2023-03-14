import { Injectable } from '@nestjs/common';
import { OrderMySqlService } from '../databases/mysql/services/order.service';

@Injectable()
export class OrderService extends OrderMySqlService { }
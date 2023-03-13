import { Injectable } from '@nestjs/common/';
import { CustomerMySqlService } from '../databases/mysql/services/customer.service';

@Injectable()
export class CustomerService extends CustomerMySqlService {}
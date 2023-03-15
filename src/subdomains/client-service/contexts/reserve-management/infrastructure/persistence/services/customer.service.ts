import { Injectable } from '@nestjs/common';

import { CustomerMySqlService } from '../databases/mysql/services';

@Injectable()
export class CustomerService extends CustomerMySqlService {}
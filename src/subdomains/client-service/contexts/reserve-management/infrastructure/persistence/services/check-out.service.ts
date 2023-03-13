import { Injectable } from '@nestjs/common';

import { CheckOutMySqlService } from '../databases/mysql/services';

@Injectable()
export class CheckOutService extends CheckOutMySqlService {}
import { Injectable } from '@nestjs/common';

import { ReserveMySqlService } from '../databases/mysql/services';

@Injectable()
export class ReserveService extends ReserveMySqlService {}
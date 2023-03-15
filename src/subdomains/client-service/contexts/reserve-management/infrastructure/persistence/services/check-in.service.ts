import { Injectable } from '@nestjs/common';

import { CheckInMySqlService } from '../databases/mysql/services/';

@Injectable()
export class CheckInService extends CheckInMySqlService {}
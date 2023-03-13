import { Injectable } from '@nestjs/common';

import { ConsumptionMySqlService } from '../databases/mysql/services';

@Injectable()
export class ConsumptionService extends ConsumptionMySqlService {}
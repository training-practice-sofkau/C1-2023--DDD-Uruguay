import { Injectable } from '@nestjs/common';

import { RepartidorMySqlService } from '../databases/mysql/services';

@Injectable()
export class RepartidorService extends RepartidorMySqlService {}
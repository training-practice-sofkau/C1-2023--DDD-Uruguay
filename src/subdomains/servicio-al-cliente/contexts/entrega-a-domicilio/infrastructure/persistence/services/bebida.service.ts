import { Injectable } from '@nestjs/common';

import { BebidaMySqlService } from '../databases/mysql/services';

@Injectable()
export class BebidaService extends BebidaMySqlService {}
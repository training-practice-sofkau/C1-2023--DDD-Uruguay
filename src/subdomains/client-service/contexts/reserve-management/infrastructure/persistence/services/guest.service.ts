import { Injectable } from '@nestjs/common';

import { GuestMySqlService } from '../databases/mysql/services';

@Injectable()
export class GuestService extends GuestMySqlService {}
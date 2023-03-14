import { Injectable } from '@nestjs/common';

import { ClienteMySqlService } from '../databases/mysql/services';

@Injectable()
export class ClienteService extends ClienteMySqlService {}
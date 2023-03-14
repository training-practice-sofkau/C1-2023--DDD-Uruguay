import { Injectable } from '@nestjs/common';

import { PlatoPrincipalMySqlService } from '../databases/mysql/services';

@Injectable()
export class PlatoPrincipalService extends PlatoPrincipalMySqlService {}
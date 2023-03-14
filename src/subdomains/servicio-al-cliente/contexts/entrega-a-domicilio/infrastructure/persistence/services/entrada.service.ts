import { Injectable } from '@nestjs/common';

import { EntradaMySqlService } from '../databases/mysql/services';

@Injectable()
export class EntradaService extends EntradaMySqlService {}
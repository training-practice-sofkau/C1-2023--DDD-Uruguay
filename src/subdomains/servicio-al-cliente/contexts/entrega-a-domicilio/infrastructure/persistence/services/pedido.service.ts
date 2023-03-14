import { Injectable } from '@nestjs/common';

import { PedidoMySqlService } from '../databases/mysql/services';

@Injectable()
export class PedidoService extends PedidoMySqlService {}
import { Injectable } from '@nestjs/common';
import { TraspasoMySqlService } from '../databases/mysql/services/traspaso.service';

@Injectable()
export class TraspasoService extends TraspasoMySqlService {}

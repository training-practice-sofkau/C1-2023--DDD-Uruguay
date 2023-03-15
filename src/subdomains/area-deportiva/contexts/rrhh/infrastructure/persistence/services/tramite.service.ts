import { Injectable } from '@nestjs/common';
import { TramiteMySqlService } from '../databases/mysql/services/tramite.service';

@Injectable()
export class TramiteService extends TramiteMySqlService {}

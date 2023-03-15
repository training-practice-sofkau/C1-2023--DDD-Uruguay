import { Injectable } from '@nestjs/common';
import { NegociacionMySqlService } from '../databases/mysql/services/negociacion.service';

@Injectable()
export class NegociacionService extends NegociacionMySqlService {}

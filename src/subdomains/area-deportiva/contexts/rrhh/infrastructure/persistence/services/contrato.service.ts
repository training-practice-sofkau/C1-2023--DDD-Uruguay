import { Injectable } from '@nestjs/common';
import { ContratoMySqlService } from '../databases/mysql/services/contrato.service';

@Injectable()
export class ContratoService extends ContratoMySqlService {}

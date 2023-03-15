import { Injectable } from '@nestjs/common';
import { CursoMySqlService } from '../databases/mysql/services';

@Injectable()
export class CursoService extends CursoMySqlService {}
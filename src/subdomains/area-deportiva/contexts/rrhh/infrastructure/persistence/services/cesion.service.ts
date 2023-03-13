import { Injectable } from '@nestjs/common';
import { CesionMySqlService } from '../databases/mysql/services/cesion.service';

@Injectable()
export class CesionService extends CesionMySqlService {}

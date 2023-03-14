import { Injectable } from '@nestjs/common/';
import { RepairsMySqlService } from '../databases/mysql';

@Injectable()
export class RepairsService extends RepairsMySqlService {}
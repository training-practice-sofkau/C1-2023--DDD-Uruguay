import { Injectable } from '@nestjs/common/';
import { RepairsMySqlService } from '../databases';

@Injectable()
export class RepairsService extends RepairsMySqlService {}
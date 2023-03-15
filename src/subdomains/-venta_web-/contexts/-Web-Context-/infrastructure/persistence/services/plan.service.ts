import { Injectable } from '@nestjs/common';
import { MembershipMySqlService } from '../databases/mysql/services/membershipMySql.service';
import { PlanMySqlService } from '../databases/mysql/services/planMySql.service';

@Injectable()
export class PlanService extends PlanMySqlService {}
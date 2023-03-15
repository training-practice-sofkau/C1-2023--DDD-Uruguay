import { Injectable } from '@nestjs/common';
import { MembershipMySqlService } from '../databases/mysql/services/membershipMySql.service';

@Injectable()
export class MembershipService extends MembershipMySqlService {}
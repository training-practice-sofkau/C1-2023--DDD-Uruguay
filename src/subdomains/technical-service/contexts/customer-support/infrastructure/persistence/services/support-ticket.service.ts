import { Injectable } from '@nestjs/common/';
import { SupportTicketMySqlService } from '../databases/mysql';


@Injectable()
export class SupportTicketService extends SupportTicketMySqlService {}
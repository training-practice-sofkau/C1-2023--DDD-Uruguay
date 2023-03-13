import { Injectable } from '@nestjs/common/';
import { SupportTicketMySqlService } from '../databases';

@Injectable()
export class SupportTicketService extends SupportTicketMySqlService {}
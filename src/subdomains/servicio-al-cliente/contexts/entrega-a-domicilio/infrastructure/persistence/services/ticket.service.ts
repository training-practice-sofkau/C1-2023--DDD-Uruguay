import { Injectable } from '@nestjs/common';

import { TicketMySqlService } from '../databases/mysql/services';

@Injectable()
export class TicketService extends TicketMySqlService {}
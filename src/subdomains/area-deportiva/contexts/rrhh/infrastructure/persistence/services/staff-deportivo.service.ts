import { Injectable } from '@nestjs/common';
import { StaffDeportivoMySqlService } from '../databases/mysql/services/staff-deportivos.service';

@Injectable()
export class StaffDeportivoService extends StaffDeportivoMySqlService {}

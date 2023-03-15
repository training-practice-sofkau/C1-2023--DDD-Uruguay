import { Injectable } from '@nestjs/common';
import { EmpleadoMySqlService } from '../databases/mysql/services/empleado.service';

@Injectable()
export class EmpleadoService extends EmpleadoMySqlService {}

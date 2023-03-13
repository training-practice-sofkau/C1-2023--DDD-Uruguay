import { Injectable} from '@nestjs/common';

import { IStaffDeportivoDomainService } from '../../../../../domain/services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoMySqlEntity } from '../entities/staff-deportivo-mysql.entity';
import { StaffDeportivoRepository } from '../repositories/staff-deportivo.repository';


@Injectable()
export class StaffDeportivoMySqlService
  implements IStaffDeportivoDomainService<StaffDeportivoMySqlEntity>
{
  
  constructor(private readonly staffDeportivoRepository: StaffDeportivoRepository) {}
  CrearStaffDeportivo(staffDeportivo: StaffDeportivoMySqlEntity): Promise<StaffDeportivoMySqlEntity> {
    return this.staffDeportivoRepository.create(staffDeportivo);
  }

  
 

}

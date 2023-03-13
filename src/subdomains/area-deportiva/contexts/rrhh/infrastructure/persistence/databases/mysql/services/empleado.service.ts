import { Injectable } from '@nestjs/common';
import { EmpleadoMySqlEntity } from '../entities/empleado-mysql.entity';
import { EmpleadoRepository } from '../repositories/empleado.repository';
import { IEmpleadoDomainService } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/services';


@Injectable()
export class EmpleadoMySqlService
  implements IEmpleadoDomainService<EmpleadoMySqlEntity>
{
  /**
   * Creates an instance of StaffDeportivoService.
   *
   * @param {StaffDeportivoRepository} staffDeportivoRepository Repositorio de staff
   * @memberof StaffDeportivoService
   */


  constructor(private readonly empleadoRepository: EmpleadoRepository) {}
  AgregarEmpleado(empleado: EmpleadoMySqlEntity): Promise<EmpleadoMySqlEntity> {
    return this.empleadoRepository.create(empleado);
  }
  BuscarEmpleado(empleadoId: string): Promise<EmpleadoMySqlEntity> {
    return this.empleadoRepository.findById(empleadoId)
  }

  
  modificarNombre(empleadoId: string, entity: EmpleadoMySqlEntity): Promise<EmpleadoMySqlEntity> {
     return this.empleadoRepository.update(empleadoId, entity);
    
   
  }
   modificarSalario(empleadoId: string, entity: EmpleadoMySqlEntity): Promise<EmpleadoMySqlEntity> {
     return this.empleadoRepository.update(empleadoId, entity);
    
   
  }
  modificarDocumento(empleadoId: string, entity: EmpleadoMySqlEntity): Promise<EmpleadoMySqlEntity> {
     return this.empleadoRepository.update(empleadoId, entity);
    
   
  }
  modificarTipoEmpleado(empleadoId: string, entity: EmpleadoMySqlEntity): Promise<EmpleadoMySqlEntity> {
     return this.empleadoRepository.update(empleadoId, entity);
    
   
  }


}

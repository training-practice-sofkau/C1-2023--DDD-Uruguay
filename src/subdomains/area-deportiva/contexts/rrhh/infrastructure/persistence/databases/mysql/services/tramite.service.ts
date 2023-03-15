import { Injectable } from '@nestjs/common';
import { ITramiteDomainService } from '../../../../../domain/services/staff-Deportivo/tramite.domain-service';
import { TramiteMySqlEntity } from '../entities/tramite-mysql.entity';
import { TramiteRepository } from '../repositories/tramite.repository';

/**
 * Servicio de dominio para el manejo de usuarios
 *
 * @export
 * @class StaffDeportivoService
 * @implements {IEmpleadoDomainService<EmpleadoMySqlEntity>}
 */
@Injectable()
export class TramiteMySqlService
  implements ITramiteDomainService<TramiteMySqlEntity>
{
  /**
   * Creates an instance of StaffDeportivoService.
   *
   * @param {StaffDeportivoRepository} staffDeportivoRepository Repositorio de staff
   * @memberof StaffDeportivoService
   */
  constructor(private readonly tamiteRepository: TramiteRepository) {}

  CrearTramite(tramite: TramiteMySqlEntity): Promise<TramiteMySqlEntity> {
    return this.tamiteRepository.create(tramite);
  }

  BuscarTramite(tramiteId: string): Promise<TramiteMySqlEntity> {
    return this.tamiteRepository.findById(tramiteId)
  }

  CrearNegociacion(tramite: TramiteMySqlEntity): Promise<TramiteMySqlEntity> {
    return this.tamiteRepository.create(tramite);
  }
  ModificarFecha(tramiteId:string, entity: TramiteMySqlEntity): Promise<TramiteMySqlEntity> {
    return this.tamiteRepository.update(tramiteId, entity);
  }
  

   
  


}

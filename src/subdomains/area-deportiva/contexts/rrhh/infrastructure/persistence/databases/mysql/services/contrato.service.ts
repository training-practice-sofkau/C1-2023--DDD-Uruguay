import { Injectable, NotFoundException } from '@nestjs/common';
import { ContratoMySqlEntity } from '../entities/contrato-mysql.entity';
import { ContratoRepository } from '../repositories/contrato.repository';
import { IContratoDomainService } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/services';

/**
 * Servicio de dominio para el manejo de usuarios
 *
 * @export
 * @class StaffDeportivoService
 * @implements {IContratoDomainService<ContratoMySqlEntity>}
 */
@Injectable()
export class ContratoMySqlService
  implements IContratoDomainService<ContratoMySqlEntity>
{
  /**
   * Creates an instance of StaffDeportivoService.
   *
   * @param {StaffDeportivoRepository} staffDeportivoRepository Repositorio de staff
   * @memberof StaffDeportivoService
   */
  constructor(private readonly contratoRepository: ContratoRepository) {}


  NegociarContrato(contrato: ContratoMySqlEntity): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.create(contrato);
  }

  BuscarContrato(contratoId: string): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.findById(contratoId);
  }

  
   ContratoModificarCosto(contratoId: string,entity: ContratoMySqlEntity): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.update(contratoId, entity);
    
    
  }
    ContratoModificarFechaSalida(contratoId: string,entity: ContratoMySqlEntity): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.update(contratoId, entity);
    
    
  }
   ContratoModificarState(contratoId: string,entity: ContratoMySqlEntity): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.update(contratoId, entity);
    
    
  }

  

 


}

import { Injectable, NotFoundException } from '@nestjs/common';
import { INegociacionDomainService } from '../../../../../domain/services/staff-Deportivo/negociacion.domain-service';
import { NegociacionMySqlEntity } from '../entities/negociacion-mysql.entity';
import { NegociacionRepository } from '../repositories/negociacion.repository';


@Injectable()
export class NegociacionMySqlService
  implements INegociacionDomainService<NegociacionMySqlEntity>
{
 
  constructor(private readonly negociacionRepository: NegociacionRepository) {}
  
  NegociacionModificarEquipoNuevo(negociacionId: string, entity: NegociacionMySqlEntity): Promise<NegociacionMySqlEntity> {
    return this.negociacionRepository.update(negociacionId,entity);
  }
  NegociacionModificarEquipoSalida(negociacionId: string, entity: NegociacionMySqlEntity): Promise<NegociacionMySqlEntity> {
    return this.negociacionRepository.update(negociacionId,entity);
  }
  NegociacionModificarTipoNegociacion(negociacionId: string, entity: NegociacionMySqlEntity): Promise<NegociacionMySqlEntity> {
    return this.negociacionRepository.update(negociacionId,entity);
  }
  NegociacionModificarState(negociacionId: string, entity: NegociacionMySqlEntity): Promise<NegociacionMySqlEntity> {
    return this.negociacionRepository.update(negociacionId,entity);
  }



}

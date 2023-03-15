import { Injectable } from '@nestjs/common';
import { ITraspasoDomainService } from '../../../../../domain/services/secretaria/traspaso.domain-service';
import { TraspasoMySqlEntity } from '../entities/traspaso-mysql.entity';
import { TraspasoRepository } from '../repositories/traspaso.repository';


@Injectable()
export class TraspasoMySqlService
  implements ITraspasoDomainService<TraspasoMySqlEntity>
{
  
  constructor(private readonly traspasoRepository: TraspasoRepository) {}

  NegociarTraspaso(traspaso: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
    return this.traspasoRepository.create(traspaso);
  }
  TraspasoModificarCosto(traspasoId: string, entity: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.update(traspasoId,entity);
  }
  TraspasoModificarFechaSalida(traspasoId: string, entity: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.update(traspasoId,entity);
  }
  TraspasoModificarEquipoNuevo(traspasoId: string, entity: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.update(traspasoId,entity);
  }
  TraspasoModificarEquipoSalida(traspasoId: string, entity: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.update(traspasoId,entity);
  }
  TraspasoModificarState(traspasoId: string, entity: TraspasoMySqlEntity): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.update(traspasoId,entity);
  }
  BuscarTraspaso(traspasoId: string): Promise<TraspasoMySqlEntity> {
   return this.traspasoRepository.findById(traspasoId);
  }


  

 



}

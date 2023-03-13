import { Injectable } from '@nestjs/common';
import { ISecretariaDomainService } from '../../../../../domain/services/secretaria/secretaria.domain-service';
import { SecretariaMySqlEntity } from '../entities/secretaria-mysql.entity';
import { SecretariaRepository } from '../repositories/secretaria.repository';


@Injectable()
export class SecretariaMySqlService
  implements ISecretariaDomainService<SecretariaMySqlEntity>
{
  
  constructor( private readonly secretariaRepository: SecretariaRepository ) {}

  CrearSecretaria(secretaria: SecretariaMySqlEntity): Promise<SecretariaMySqlEntity> {
    return this.secretariaRepository.create(secretaria);
  }



 
 
 

 



}

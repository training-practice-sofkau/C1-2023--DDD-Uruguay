import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { SecretariaMySqlEntity } from '../entities/secretaria-mysql.entity';
@Injectable()
export class SecretariaRepository
  implements IRepository<SecretariaMySqlEntity>
{
  constructor(
    @InjectRepository(SecretariaMySqlEntity)
    private readonly secretariaRepository: Repository<SecretariaMySqlEntity>,
  ) {}

  async findAll(): Promise<SecretariaMySqlEntity[]> {
    return await this.secretariaRepository.find();
  }

  async findById(
    secretariaId: string,
  ): Promise<SecretariaMySqlEntity> {
    const data = await this.secretariaRepository.findOneBy({
      secretariaId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Secretaria con id ${secretariaId} no encontrado`,
    );
  }

  async create(
    entity: SecretariaMySqlEntity,
  ): Promise<SecretariaMySqlEntity> {
    return await this.secretariaRepository.save(entity);
  }

  async update(
    secretariaId: string,
    entity: SecretariaMySqlEntity,
  ): Promise<SecretariaMySqlEntity> {
    const data = await this.secretariaRepository.findOneBy({
      secretariaId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        secretariaId,
      };
      return this.secretariaRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Secretaria con id ${secretariaId} no encontrado`,
    );
  }

  async delete(secretariaId: string): Promise<boolean> {
    const data = await this.secretariaRepository.findOneBy({
      secretariaId,
    });
    if (data) {
      await this.secretariaRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Secretaria con id ${secretariaId} no encontrado`,
    );
  }
  
}
function Intectable(): (target: typeof SecretariaRepository) => void | typeof SecretariaRepository {
  throw new Error('Function not implemented.');
}


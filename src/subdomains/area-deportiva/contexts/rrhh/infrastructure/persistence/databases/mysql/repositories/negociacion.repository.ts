import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { NegociacionMySqlEntity } from '../entities/negociacion-mysql.entity';
@Injectable()
export class NegociacionRepository
  implements IRepository<NegociacionMySqlEntity>
{
  constructor(
    @InjectRepository(NegociacionMySqlEntity)
    private readonly negociacionRepository: Repository<NegociacionMySqlEntity>,
  ) {}

  async findAll(): Promise<NegociacionMySqlEntity[]> {
    return await this.negociacionRepository.find();
  }

  async findById(
    negociacionId: string,
  ): Promise<NegociacionMySqlEntity> {
    const data = await this.negociacionRepository.findOneBy({
      negociacionId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Negociacion con id ${negociacionId} no encontrado`,
    );
  }

  async create(
    entity: NegociacionMySqlEntity,
  ): Promise<NegociacionMySqlEntity> {
    return await this.negociacionRepository.save(entity);
  }

  async update(
    negociacionId: string,
    entity: NegociacionMySqlEntity,
  ): Promise<NegociacionMySqlEntity> {
    const data = await this.negociacionRepository.findOneBy({
      negociacionId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        negociacionId,
      };
      return this.negociacionRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Negociacion con id ${negociacionId} no encontrado`,
    );
  }

  async delete(negociacionId: string): Promise<boolean> {
    const data = await this.negociacionRepository.findOneBy({
      negociacionId,
    });
    if (data) {
      await this.negociacionRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Negociacion con id ${negociacionId} no encontrado`,
    );
  }
  
}
function Intectable(): (target: typeof NegociacionRepository) => void | typeof NegociacionRepository {
  throw new Error('Function not implemented.');
}


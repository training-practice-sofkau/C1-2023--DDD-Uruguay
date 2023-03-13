import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { ContratoMySqlEntity } from '../entities/contrato-mysql.entity';

export class ContratoRepository
  implements IRepository<ContratoMySqlEntity>
{
  constructor(
    @InjectRepository(ContratoMySqlEntity)
    private readonly contratoRepository: Repository<ContratoMySqlEntity>,
  ) {}

  findAll(): Promise<ContratoMySqlEntity[]> {
    return this.contratoRepository.find();
  }

  async findById(
    contratoId: string,
  ): Promise<ContratoMySqlEntity> {
    const data = await this.contratoRepository.findOneBy({
      contratoId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Contrato con id ${contratoId} no encontrado`,
    );
  }

  create(
    entity: ContratoMySqlEntity,
  ): Promise<ContratoMySqlEntity> {
    return this.contratoRepository.save(entity);
  }

  async update(
    contratoId: string,
    entity: ContratoMySqlEntity,
  ): Promise<ContratoMySqlEntity> {
    const data = await this.contratoRepository.findOneBy({
      contratoId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        contratoId,
      };
      return this.contratoRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Contrato con id ${contratoId} no encontrado`,
    );
  }

  async delete(contratoId: string): Promise<boolean> {
    const data = await this.contratoRepository.findOneBy({
      contratoId,
    });
    if (data) {
      await this.contratoRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Contrato con id ${contratoId} no encontrado`,
    );
  }
  
}

import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { CesionMySqlEntity } from '../entities/cesion-mysql.entity';

export class CesionRepository
  implements IRepository<CesionMySqlEntity>
{
  constructor(
    @InjectRepository(CesionMySqlEntity)
    private readonly cesionRepository: Repository<CesionMySqlEntity>,
  ) {}

  findAll(): Promise<CesionMySqlEntity[]> {
    return this.cesionRepository.find();
  }

  async findById(
    cesionId: string,
  ): Promise<CesionMySqlEntity> {
    const data = await this.cesionRepository.findOneBy({cesionId,});
    if (data) return data;
    throw new NotFoundException(
      `Cesion con id ${cesionId} no encontrado`,
    );
  }

  create(
    entity: CesionMySqlEntity,
  ): Promise<CesionMySqlEntity> {
    return this.cesionRepository.save(entity);
  }

  async update(
    cesionId: string,
    entity: CesionMySqlEntity,
  ): Promise<CesionMySqlEntity> {
    const data = await this.cesionRepository.findOneBy({
      cesionId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        cesionId,
      };
      return this.cesionRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Cesion con id ${cesionId} no encontrado`,
    );
  }

  async delete(cesionId: string): Promise<boolean> {
    const data = await this.cesionRepository.findOneBy({
      cesionId,
    });
    if (data) {
      await this.cesionRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Cesion con id ${cesionId} no encontrado`,
    );
  }
  
}

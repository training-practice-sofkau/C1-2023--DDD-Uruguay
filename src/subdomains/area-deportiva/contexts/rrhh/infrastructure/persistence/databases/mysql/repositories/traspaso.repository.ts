import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { TraspasoMySqlEntity } from '../entities/traspaso-mysql.entity';

export class TraspasoRepository
  implements IRepository<TraspasoMySqlEntity>
{
  constructor(
    @InjectRepository(TraspasoMySqlEntity)
    private readonly traspasoRepository: Repository<TraspasoMySqlEntity>,
  ) {}

  findAll(): Promise<TraspasoMySqlEntity[]> {
    return this.traspasoRepository.find();
  }

  async findById(
    traspasoId: string,
  ): Promise<TraspasoMySqlEntity> {
    const data = await this.traspasoRepository.findOneBy({
      traspasoId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Staff Deportivo con id ${traspasoId} no encontrado`,
    );
  }

  create(
    entity: TraspasoMySqlEntity,
  ): Promise<TraspasoMySqlEntity> {
    return this.traspasoRepository.save(entity);
  }

  async update(
    traspasoId: string,
    entity: TraspasoMySqlEntity,
  ): Promise<TraspasoMySqlEntity> {
    const data = await this.traspasoRepository.findOneBy({
      traspasoId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        traspasoId,
      };
      return this.traspasoRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${traspasoId} no encontrado`,
    );
  }

  async delete(traspasoId: string): Promise<boolean> {
    const data = await this.traspasoRepository.findOneBy({
      traspasoId,
    });
    if (data) {
      await this.traspasoRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${traspasoId} no encontrado`,
    );
  }
  
}

import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { EmpleadoMySqlEntity } from '../entities/empleado-mysql.entity';
import { TramiteMySqlEntity } from '../entities/tramite-mysql.entity';

export class TramiteRepository
  implements IRepository<TramiteMySqlEntity>
{
  constructor(
    @InjectRepository(TramiteMySqlEntity)
    private readonly tramiteRepository: Repository<TramiteMySqlEntity>,
  ) {}

  findAll(): Promise<TramiteMySqlEntity[]> {
    return this.tramiteRepository.find();
  }

  async findById(
    tramiteId: string,
  ): Promise<TramiteMySqlEntity> {
    const data = await this.tramiteRepository.findOneBy({
      tramiteId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Tramite con id ${tramiteId} no encontrado`,
    );
  }

  create(
    entity: TramiteMySqlEntity,
  ): Promise<TramiteMySqlEntity> {
    return this.tramiteRepository.save(entity);
  }

  async update(
    tramiteId: string,
    entity: TramiteMySqlEntity,
  ): Promise<TramiteMySqlEntity> {
    const data = await this.tramiteRepository.findOneBy({
      tramiteId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        tramiteId,
      };
      return this.tramiteRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Tramite con id ${tramiteId} no encontrado`,
    );
  }

  async delete(tramiteId: string): Promise<boolean> {
    const data = await this.tramiteRepository.findOneBy({
      tramiteId,
    });
    if (data) {
      await this.tramiteRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Tramite con id ${tramiteId} no encontrado`,
    );
  }
  
}

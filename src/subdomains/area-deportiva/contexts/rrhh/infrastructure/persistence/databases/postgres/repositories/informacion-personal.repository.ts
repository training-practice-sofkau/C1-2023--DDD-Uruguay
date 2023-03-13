import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InformacionPersonalPostgresEntity } from '../entities/informacion-personal-postgres.entity';
import { IRepository } from './interfaces/repository.interface';

export class InformacionPersonalRepository
  implements IRepository<InformacionPersonalPostgresEntity>
{
  constructor(
    @InjectRepository(InformacionPersonalPostgresEntity)
    private readonly informacionPersonalRepository: Repository<InformacionPersonalPostgresEntity>,
  ) {}

  findAll(): Promise<InformacionPersonalPostgresEntity[]> {
    return this.informacionPersonalRepository.find();
  }

  async findById(
    informacionPersonalId: string,
  ): Promise<InformacionPersonalPostgresEntity> {
    const data = await this.informacionPersonalRepository.findOneBy({
      informacionPersonalId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Información Personal con id ${informacionPersonalId} no encontrado`,
    );
  }

  create(
    entity: InformacionPersonalPostgresEntity,
  ): Promise<InformacionPersonalPostgresEntity> {
    return this.informacionPersonalRepository.save(entity);
  }

  async update(
    informacionPersonalId: string,
    entity: InformacionPersonalPostgresEntity,
  ): Promise<InformacionPersonalPostgresEntity> {
    const data = await this.informacionPersonalRepository.findOneBy({
      informacionPersonalId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        informacionPersonalId,
      };
      return this.informacionPersonalRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Información Personal con id ${informacionPersonalId} no encontrado`,
    );
  }

  async delete(informacionPersonalId: string): Promise<boolean> {
    const data = await this.informacionPersonalRepository.findOneBy({
      informacionPersonalId,
    });
    if (data) {
      await this.informacionPersonalRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Información Personal con id ${informacionPersonalId} no encontrado`,
    );
  }
}

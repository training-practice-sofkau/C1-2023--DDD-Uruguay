import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { EmpleadoMySqlEntity } from '../entities/empleado-mysql.entity';

export class EmpleadoRepository
  implements IRepository<EmpleadoMySqlEntity>
{
  constructor(
    @InjectRepository(EmpleadoMySqlEntity)
    private readonly empleadoRepository: Repository<EmpleadoMySqlEntity>,
  ) {}

  findAll(): Promise<EmpleadoMySqlEntity[]> {
    return this.empleadoRepository.find();
  }

  async findById(
    empleadoId: string,
  ): Promise<EmpleadoMySqlEntity> {
    const data = await this.empleadoRepository.findOneBy({
      empleadoId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Staff Deportivo con id ${empleadoId} no encontrado`,
    );
  }

  create(
    entity: EmpleadoMySqlEntity,
  ): Promise<EmpleadoMySqlEntity> {
    return this.empleadoRepository.save(entity);
  }

  async update(
    empleadoId: string,
    entity: EmpleadoMySqlEntity,
  ): Promise<EmpleadoMySqlEntity> {
    const data = await this.empleadoRepository.findOneBy({
      empleadoId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        empleadoId,
      };
      return this.empleadoRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${empleadoId} no encontrado`,
    );
  }

  async delete(empleadoId: string): Promise<boolean> {
    const data = await this.empleadoRepository.findOneBy({
      empleadoId,
    });
    if (data) {
      await this.empleadoRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${empleadoId} no encontrado`,
    );
  }
  
}

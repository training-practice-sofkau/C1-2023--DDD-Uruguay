import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { StaffDeportivoMySqlEntity } from '../entities/staff-deportivo-mysql.entity';

@Injectable()
export class StaffDeportivoRepository
  implements IRepository<StaffDeportivoMySqlEntity>
{
  constructor(
    @InjectRepository(StaffDeportivoMySqlEntity)
    private readonly staffDeportivoRepository: Repository<StaffDeportivoMySqlEntity>,
  ) {}

  async findAll(): Promise<StaffDeportivoMySqlEntity[]> {
    return await this.staffDeportivoRepository.find();
  }

  async findById(
    staffDeportivoId: string,
  ): Promise<StaffDeportivoMySqlEntity> {
    const data = await this.staffDeportivoRepository.findOneBy({
      staffDeportivoId,
    });
    if (data) return data;
    throw new NotFoundException(
      `Staff Deportivo con id ${staffDeportivoId} no encontrado`,
    );
  }

  async create(
    entity: StaffDeportivoMySqlEntity,
  ): Promise<StaffDeportivoMySqlEntity> {
    return await this.staffDeportivoRepository.save(entity);
  }

  async update(
    staffDeportivoId: string,
    entity: StaffDeportivoMySqlEntity,
  ): Promise<StaffDeportivoMySqlEntity> {
    const data = await this.staffDeportivoRepository.findOneBy({
      staffDeportivoId,
    });
    if (data) {
      const newEntity = {
        ...entity,
        staffDeportivoId,
      };
      return this.staffDeportivoRepository.save(newEntity);
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${staffDeportivoId} no encontrado`,
    );
  }

  async delete(staffDeportivoId: string): Promise<boolean> {
    const data = await this.staffDeportivoRepository.findOneBy({
      staffDeportivoId,
    });
    if (data) {
      await this.staffDeportivoRepository.remove(data);
      return true;
    }
    throw new NotFoundException(
      `Staff Deportivo con id ${staffDeportivoId} no encontrado`,
    );
  }
  
}



import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UsuarioPostgresEntity } from '../entities/usuario-postgres.entity';
import { IRepository } from './interfaces/repository.interface';

export class UsuarioRepository implements IRepository<UsuarioPostgresEntity> {
  constructor(
    @InjectRepository(UsuarioPostgresEntity)
    private readonly usuarioRepository: Repository<UsuarioPostgresEntity>,
  ) {}

  find(
    options?: FindManyOptions<UsuarioPostgresEntity>,
  ): Promise<UsuarioPostgresEntity[]> {
    return this.usuarioRepository.find(options);
  }

  findAll(informacionPersonal: boolean): Promise<UsuarioPostgresEntity[]> {
    const options = informacionPersonal
      ? { relations: ['informacionPersonal'] }
      : {};
    return this.usuarioRepository.find(options);
  }

  async findById(usuarioId: string): Promise<UsuarioPostgresEntity> {
    const data = await this.usuarioRepository.findOneBy({ usuarioId });
    if (data) return data;
    throw new NotFoundException(`Usuario con id ${usuarioId} no encontrado`);
  }

  create(entity: UsuarioPostgresEntity): Promise<UsuarioPostgresEntity> {
    return this.usuarioRepository.save(entity);
  }

  async update(
    usuarioId: string,
    entity: UsuarioPostgresEntity,
  ): Promise<UsuarioPostgresEntity> {
    const data = await this.usuarioRepository.findOneBy({ usuarioId });
    if (data) {
      const newEntity = {
        ...entity,
        usuarioId,
      };
      return this.usuarioRepository.save(newEntity);
    }
    throw new NotFoundException(`Usuario con id ${usuarioId} no encontrado`);
  }

  async delete(usuarioId: string): Promise<boolean> {
    const data = await this.usuarioRepository.findOneBy({ usuarioId });
    if (data) {
      await this.usuarioRepository.remove(data);
      return true;
    }
    throw new NotFoundException(`Usuario con id ${usuarioId} no encontrado`);
  }
}

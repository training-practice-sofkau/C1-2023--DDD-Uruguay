import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { PlatoPrincipalMySqlEntity } from '../../entities/pedido';

@Injectable()
export class PlatoPrincipalMySqlRepository
    implements IRepository<PlatoPrincipalMySqlEntity>{

    constructor(
        @InjectRepository(PlatoPrincipalMySqlEntity)
        private readonly repository: Repository<PlatoPrincipalMySqlEntity>
    ) { }


    async findAll(): Promise<PlatoPrincipalMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(platoPrincipalId: string): Promise<PlatoPrincipalMySqlEntity> {
        const platoPrincipal = await this.repository.findOneBy({ platoPrincipalId })
        if (!platoPrincipal) throw new BadRequestException(`No se encontró un plato principal con el id: ${platoPrincipalId}`)
        return platoPrincipal;
    }

    async create(entity: PlatoPrincipalMySqlEntity): Promise<PlatoPrincipalMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(platoPrincipalId: string, nombre: string): Promise<string> {
        const platoPrincipal = await this.repository.findOneBy({ platoPrincipalId })
        if (!platoPrincipal) throw new BadRequestException(`No se encontró un plato principal con el id: ${platoPrincipalId}`)
        platoPrincipal.nombre = nombre;
        await this.repository.save(platoPrincipal);
        return nombre;
    }

    async updateGuarnicion(platoPrincipalId: string, guarnicion: string): Promise<string> {
        const platoPrincipal = await this.repository.findOneBy({ platoPrincipalId })
        if (!platoPrincipal) throw new BadRequestException(`No se encontró un plato principal con el id: ${platoPrincipalId}`)
        platoPrincipal.guarnicion = guarnicion;
        await this.repository.save(platoPrincipal);
        return guarnicion;
    }

    async delete(platoPrincipalId: string): Promise<boolean> {
        const platoPrincipal = await this.repository.findOneBy({ platoPrincipalId });
        if (!platoPrincipal) throw new BadRequestException(`No se encontró un plato principal con el id: ${platoPrincipalId}`)
        await this.repository.remove(platoPrincipal);
        return true;
    }

}
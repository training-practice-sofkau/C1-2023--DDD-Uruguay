import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { BebidaMySqlEntity } from '../../entities/pedido';

@Injectable()
export class BebidaMySqlRepository
    implements IRepository<BebidaMySqlEntity>{

    constructor(
        @InjectRepository(BebidaMySqlEntity)
        private readonly repository: Repository<BebidaMySqlEntity>
    ) { }


    async findAll(): Promise<BebidaMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(bebidaId: string): Promise<BebidaMySqlEntity> {
        const bebida = await this.repository.findOneBy({ bebidaId })
        if (!bebida) throw new BadRequestException(`No se encontró una bebida con el id: ${bebidaId}`)
        return bebida;
    }

    async create(entity: BebidaMySqlEntity): Promise<BebidaMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(bebidaId: string, nombre: string): Promise<string> {
        const bebida = await this.repository.findOneBy({ bebidaId })
        if (!bebida) throw new BadRequestException(`No se encontró una bebida con el id: ${bebidaId}`)
        bebida.nombre = nombre;
        await this.repository.save(bebida);
        return nombre;
    }

    async updateTamanio(bebidaId: string, tamanio: string): Promise<string> {
        const bebida = await this.repository.findOneBy({ bebidaId })
        if (!bebida) throw new BadRequestException(`No se encontró una bebida con el id: ${bebidaId}`)
        bebida.tamanio = tamanio;
        await this.repository.save(bebida);
        return tamanio;
    }

    async delete(bebidaId: string): Promise<boolean> {
        const bebida = await this.repository.findOneBy({ bebidaId });
        if (!bebida) throw new BadRequestException(`No se encontró una bebida con el id: ${bebidaId}`)
        await this.repository.remove(bebida);
        return true;
    }

}
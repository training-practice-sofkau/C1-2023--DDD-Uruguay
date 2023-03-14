import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { EntradaMySqlEntity } from '../../entities/pedido';

@Injectable()
export class EntradaMySqlRepository
    implements IRepository<EntradaMySqlEntity>{

    constructor(
        @InjectRepository(EntradaMySqlEntity)
        private readonly repository: Repository<EntradaMySqlEntity>
    ) { }


    async findAll(): Promise<EntradaMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(entradaId: string): Promise<EntradaMySqlEntity> {
        const entrada = await this.repository.findOneBy({ entradaId })
        if (!entrada) throw new BadRequestException(`No se encontró una entrada con el id: ${entradaId}`)
        return entrada;
    }

    async create(entity: EntradaMySqlEntity): Promise<EntradaMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(entradaId: string, nombre: string): Promise<string> {
        const entrada = await this.repository.findOneBy({ entradaId })
        if (!entrada) throw new BadRequestException(`No se encontró una entrada con el id: ${entradaId}`)
        entrada.nombre = nombre;
        await this.repository.save(entrada);
        return nombre;
    }

    async delete(entradaId: string): Promise<boolean> {
        const entrada = await this.repository.findOneBy({ entradaId });
        if (!entrada) throw new BadRequestException(`No se encontró una entrada con el id: ${entradaId}`)
        await this.repository.remove(entrada);
        return true;
    }

}
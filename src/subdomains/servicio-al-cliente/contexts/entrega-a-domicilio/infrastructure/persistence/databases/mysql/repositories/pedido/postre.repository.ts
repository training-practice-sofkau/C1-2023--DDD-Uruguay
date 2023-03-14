import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { PostreMySqlEntity } from '../../entities/pedido';

@Injectable()
export class PostreMySqlRepository
    implements IRepository<PostreMySqlEntity>{

    constructor(
        @InjectRepository(PostreMySqlEntity)
        private readonly repository: Repository<PostreMySqlEntity>
    ) { }


    async findAll(): Promise<PostreMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(postreId: string): Promise<PostreMySqlEntity> {
        const postre = await this.repository.findOneBy({ postreId })
        if (!postre) throw new BadRequestException(`No se encontró un postre con el id: ${postreId}`)
        return postre;
    }

    async create(entity: PostreMySqlEntity): Promise<PostreMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(postreId: string, nombre: string): Promise<string> {
        const postre = await this.repository.findOneBy({ postreId })
        if (!postre) throw new BadRequestException(`No se encontró un postre con el id: ${postreId}`)
        postre.nombre = nombre;
        await this.repository.save(postre);
        return nombre;
    }

    async updateTamanio(postreId: string, tamanio: string): Promise<string> {
        const postre = await this.repository.findOneBy({ postreId })
        if (!postre) throw new BadRequestException(`No se encontró un postre con el id: ${postreId}`)
        postre.tamanio = tamanio;
        await this.repository.save(postre);
        return tamanio;
    }

    async updateEsParaVeganos(postreId: string, esParaVeganos: boolean): Promise<boolean> {
        const postre = await this.repository.findOneBy({ postreId })
        if (!postre) throw new BadRequestException(`No se encontró un postre con el id: ${postreId}`)
        postre.esParaVeganos = esParaVeganos;
        await this.repository.save(postre);
        return esParaVeganos;
    }

    async delete(postreId: string): Promise<boolean> {
        const postre = await this.repository.findOneBy({ postreId });
        if (!postre) throw new BadRequestException(`No se encontró un postre con el id: ${postreId}`)
        await this.repository.remove(postre);
        return true;
    }

}
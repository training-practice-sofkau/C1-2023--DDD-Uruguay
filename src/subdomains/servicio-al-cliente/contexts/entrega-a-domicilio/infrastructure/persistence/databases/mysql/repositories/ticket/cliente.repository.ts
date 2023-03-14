import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { ClienteMySqlEntity } from '../../entities/ticket';

@Injectable()
export class ClienteMySqlRepository
    implements IRepository<ClienteMySqlEntity>{

    constructor(
        @InjectRepository(ClienteMySqlEntity)
        private readonly repository: Repository<ClienteMySqlEntity>
    ) { }


    async findAll(): Promise<ClienteMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(clienteId: string): Promise<ClienteMySqlEntity> {
        const cliente = await this.repository.findOneBy({ clienteId })
        if (!cliente) throw new BadRequestException(`No se encontró un cliente con el id: ${clienteId}`)
        return cliente;
    }

    async create(entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(clienteId: string, nombre: string): Promise<string> {
        const cliente = await this.repository.findOneBy({ clienteId })
        if (!cliente) throw new BadRequestException(`No se encontró un cliente con el id: ${clienteId}`)
        cliente.nombre = nombre;
        await this.repository.save(cliente);
        return nombre;
    }

    async updateDireccion(clienteId: string, direccion: string): Promise<string> {
        const cliente = await this.repository.findOneBy({ clienteId })
        if (!cliente) throw new BadRequestException(`No se encontró un cliente con el id: ${clienteId}`)
        cliente.direccion = direccion;
        await this.repository.save(cliente);
        return direccion;
    }

    async delete(clienteId: string): Promise<boolean> {
        const cliente = await this.repository.findOneBy({ clienteId });
        if (!cliente) throw new BadRequestException(`No se encontró un cliente con el id: ${clienteId}`)
        await this.repository.remove(cliente);
        return true;
    }

}
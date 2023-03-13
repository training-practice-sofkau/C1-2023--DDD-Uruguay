import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base/repository.base';
import { ClientMySqlEntity } from '../entities/client.entity';

@Injectable()
export class ClientRepository
    implements IRepository<ClientMySqlEntity>{

    constructor(
        @InjectRepository(ClientMySqlEntity)
        private readonly repository: Repository<ClientMySqlEntity>
    ) { }

    async findAll(): Promise<ClientMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(clientId: string): Promise<ClientMySqlEntity> {

        const client = await this.repository.findOneBy({ clientId, deletedAt: undefined })

        if (!client) throw new BadRequestException(`Client with id: ${clientId} not found`)

        return client;
    }

    async create(entity: ClientMySqlEntity): Promise<ClientMySqlEntity> {
        return await this.repository.save(entity)
    }

    update(clientId: string, entity: ClientMySqlEntity): Promise<ClientMySqlEntity> {
        throw new Error('Method not implemented.')
    }

    async delete(clientId: string): Promise<boolean> {
        const client = await this.repository.findOneBy({ clientId, deletedAt: undefined });
        if (!client) throw new BadRequestException(`Client with id: ${clientId} not found`)

        return true
    }

}
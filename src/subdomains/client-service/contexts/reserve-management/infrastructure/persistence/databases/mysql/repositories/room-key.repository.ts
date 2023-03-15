import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { RoomKeyMySqlEntity } from '../entities';


@Injectable()
export class RoomKeyRepository
    implements IRepository<RoomKeyMySqlEntity>{

    constructor(
        @InjectRepository(RoomKeyMySqlEntity)
        private readonly repository: Repository<RoomKeyMySqlEntity>
    ) { }

    async findAll(): Promise<RoomKeyMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(roomKeyId: string): Promise<RoomKeyMySqlEntity> {

        const roomKey = await this.repository.findOneBy({ roomKeyId })

        if (!roomKey) throw new BadRequestException(`RoomKey with id: ${roomKeyId} not found`)

        return roomKey;
    }

    async create(entity: RoomKeyMySqlEntity): Promise<RoomKeyMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(roomKeyId: string, entity: RoomKeyMySqlEntity): Promise<RoomKeyMySqlEntity> {
        const data = await this.repository.findOneBy({ roomKeyId });
        if (data) {
            const newEntity = {
                ...entity,
                roomKeyId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`RoomKey with id: ${roomKeyId} not found`);
    }

    async delete(roomKeyId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ roomKeyId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`RoomKey with id: ${roomKeyId} not found`);
    }
}


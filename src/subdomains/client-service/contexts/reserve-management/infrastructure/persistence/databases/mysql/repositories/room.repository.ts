import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { RoomMySqlEntity } from '../entities';


@Injectable()
export class RoomRepository
    implements IRepository<RoomMySqlEntity>{

    constructor(
        @InjectRepository(RoomMySqlEntity)
        private readonly repository: Repository<RoomMySqlEntity>
    ) { }

    async findAll(): Promise<RoomMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(roomId: string): Promise<RoomMySqlEntity> {

        const room = await this.repository.findOneBy({ roomId })

        if (!room) throw new BadRequestException(`Room with id: ${roomId} not found`)

        return room;
    }

    async create(entity: RoomMySqlEntity): Promise<RoomMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(roomId: string, entity: RoomMySqlEntity): Promise<RoomMySqlEntity> {
        const data = await this.repository.findOneBy({ roomId });
        if (data) {
            const newEntity = {
                ...entity,
                roomId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Room with id: ${roomId} not found`);
    }

    async delete(roomId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ roomId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Room with id: ${roomId} not found`);
    }
}


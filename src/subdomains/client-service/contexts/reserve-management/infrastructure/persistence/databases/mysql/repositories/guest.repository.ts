import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { GuestMySqlEntity } from '../entities';


@Injectable()
export class GuestRepository
    implements IRepository<GuestMySqlEntity>{

    constructor(
        @InjectRepository(GuestMySqlEntity)
        private readonly repository: Repository<GuestMySqlEntity>
    ) { }

    async findAll(): Promise<GuestMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(guestId: string): Promise<GuestMySqlEntity> {

        const guest = await this.repository.findOneBy({ guestId })

        if (!guest) throw new BadRequestException(`Guest with id: ${guestId} not found`)

        return guest;
    }

    async create(entity: GuestMySqlEntity): Promise<GuestMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(guestId: string, entity: GuestMySqlEntity): Promise<GuestMySqlEntity> {
        const data = await this.repository.findOneBy({ guestId });
        if (data) {
            const newEntity = {
                ...entity,
                guestId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Guest with id: ${guestId} not found`);
    }

    async delete(guestId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ guestId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Guest with id: ${guestId} not found`);
    }
}


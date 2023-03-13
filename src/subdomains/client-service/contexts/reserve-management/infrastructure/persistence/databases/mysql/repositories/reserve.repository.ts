import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base/';
import { ReserveMySqlEntity } from '../entities';


@Injectable()
export class ReserveRepository
    implements IRepository<ReserveMySqlEntity>{

    constructor(
        @InjectRepository(ReserveMySqlEntity)
        private readonly repository: Repository<ReserveMySqlEntity>
    ) { }

    async findAll(): Promise<ReserveMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(reserveId: string): Promise<ReserveMySqlEntity> {

        const reserve = await this.repository.findOneBy({ reserveId })

        if (!reserve) throw new BadRequestException(`Reserve with id: ${reserveId} not found`)

        return reserve;
    }

    async create(entity: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(reserveId: string, entity: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        const data = await this.repository.findOneBy({ reserveId });
        if (data) {
            const newEntity = {
                ...entity,
                reserveId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Reserve with id: ${reserveId} not found`);
    }

    async delete(reserveId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ reserveId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Reserve with id: ${reserveId} not found`);
    }
}


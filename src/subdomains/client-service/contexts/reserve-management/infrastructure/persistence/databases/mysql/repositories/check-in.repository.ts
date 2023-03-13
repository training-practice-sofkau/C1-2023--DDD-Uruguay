import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { CheckInMySqlEntity } from '../entities';


@Injectable()
export class CheckInRepository
    implements IRepository<CheckInMySqlEntity>{

    constructor(
        @InjectRepository(CheckInMySqlEntity)
        private readonly repository: Repository<CheckInMySqlEntity>
    ) { }

    async findAll(): Promise<CheckInMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(checkInId: string): Promise<CheckInMySqlEntity> {

        const checkIn = await this.repository.findOneBy({ checkInId })

        if (!checkIn) throw new BadRequestException(`CheckIn with id: ${checkInId} not found`)

        return checkIn;
    }

    async create(entity: CheckInMySqlEntity): Promise<CheckInMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(checkInId: string, entity: CheckInMySqlEntity): Promise<CheckInMySqlEntity> {
        const data = await this.repository.findOneBy({ checkInId });
        if (data) {
            const newEntity = {
                ...entity,
                checkInId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`CheckIn with id: ${checkInId} not found`);
    }

    async delete(checkInId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ checkInId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`CheckIn with id: ${checkInId} not found`);
    }
}


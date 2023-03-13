import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { CheckOutMySqlEntity } from '../entities';


@Injectable()
export class CheckOutRepository
    implements IRepository<CheckOutMySqlEntity>{

    constructor(
        @InjectRepository(CheckOutMySqlEntity)
        private readonly repository: Repository<CheckOutMySqlEntity>
    ) { }

    async findAll(): Promise<CheckOutMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(checkOutId: string): Promise<CheckOutMySqlEntity> {

        const checkOut = await this.repository.findOneBy({ checkOutId })

        if (!checkOut) throw new BadRequestException(`CheckOut with id: ${checkOutId} not found`)

        return checkOut;
    }

    async create(entity: CheckOutMySqlEntity): Promise<CheckOutMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(checkOutId: string, entity: CheckOutMySqlEntity): Promise<CheckOutMySqlEntity> {
        const data = await this.repository.findOneBy({ checkOutId });
        if (data) {
            const newEntity = {
                ...entity,
                checkOutId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`CheckOut with id: ${checkOutId} not found`);
    }

    async delete(checkOutId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ checkOutId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`CheckOut with id: ${checkOutId} not found`);
    }
}


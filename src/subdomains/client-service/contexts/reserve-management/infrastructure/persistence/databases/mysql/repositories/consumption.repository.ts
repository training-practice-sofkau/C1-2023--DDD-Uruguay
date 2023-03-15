import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { ConsumptionMySqlEntity } from '../entities';


@Injectable()
export class ConsumptionRepository
    implements IRepository<ConsumptionMySqlEntity>{

    constructor(
        @InjectRepository(ConsumptionMySqlEntity)
        private readonly repository: Repository<ConsumptionMySqlEntity>
    ) { }

    async findAll(): Promise<ConsumptionMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(consumptionId: string): Promise<ConsumptionMySqlEntity> {

        const consumption = await this.repository.findOneBy({ consumptionId })

        if (!consumption) throw new BadRequestException(`Consumption with id: ${consumptionId} not found`)

        return consumption;
    }

    async create(entity: ConsumptionMySqlEntity): Promise<ConsumptionMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(consumptionId: string, entity: ConsumptionMySqlEntity): Promise<ConsumptionMySqlEntity> {
        const data = await this.repository.findOneBy({ consumptionId });
        if (data) {
            const newEntity = {
                ...entity,
                consumptionId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Consumption with id: ${consumptionId} not found`);
    }

    async delete(consumptionId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ consumptionId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Consumption with id: ${consumptionId} not found`);
    }
}


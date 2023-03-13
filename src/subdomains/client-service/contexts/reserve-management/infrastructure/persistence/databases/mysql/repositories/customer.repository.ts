import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { CustomerMySqlEntity } from '../entities';


@Injectable()
export class CustomerRepository
    implements IRepository<CustomerMySqlEntity>{

    constructor(
        @InjectRepository(CustomerMySqlEntity)
        private readonly repository: Repository<CustomerMySqlEntity>
    ) { }

    async findAll(): Promise<CustomerMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(customerId: string): Promise<CustomerMySqlEntity> {

        const customer = await this.repository.findOneBy({ customerId })

        if (!customer) throw new BadRequestException(`Customer with id: ${customerId} not found`)

        return customer;
    }

    async create(entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(customerId: string, entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        const data = await this.repository.findOneBy({ customerId });
        if (data) {
            const newEntity = {
                ...entity,
                customerId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Customer with id: ${customerId} not found`);
    }

    async delete(customerId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ customerId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Customer with id: ${customerId} not found`);
    }
}


import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from './base';
import { InvoiceMySqlEntity } from '../entities';


@Injectable()
export class InvoiceRepository
    implements IRepository<InvoiceMySqlEntity>{

    constructor(
        @InjectRepository(InvoiceMySqlEntity)
        private readonly repository: Repository<InvoiceMySqlEntity>
    ) { }

    async findAll(): Promise<InvoiceMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(invoiceId: string): Promise<InvoiceMySqlEntity> {

        const invoice = await this.repository.findOneBy({ invoiceId })

        if (!invoice) throw new BadRequestException(`Invoice with id: ${invoiceId} not found`)

        return invoice;
    }

    async create(entity: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        return await this.repository.save(entity)
    }

    async update(invoiceId: string, entity: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        const data = await this.repository.findOneBy({ invoiceId });
        if (data) {
            const newEntity = {
                ...entity,
                invoiceId,
            };
            return this.repository.save(newEntity);
        }
        throw new BadRequestException(`Invoice with id: ${invoiceId} not found`);
    }

    async delete(invoiceId: string): Promise<boolean> {
        const data = await this.repository.findOneBy({ invoiceId });
        if (data) {
            await this.repository.remove(data);
            return true;
        }
        throw new BadRequestException(`Invoice with id: ${invoiceId} not found`);
    }
}


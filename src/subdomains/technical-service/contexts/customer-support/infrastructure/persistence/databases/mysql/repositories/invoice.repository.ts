import { Injectable } from '@nestjs/common';
import { IRepository } from './base/repository.base';
import { InvoiceMySqlEntity } from '../entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceRepository implements IRepository<InvoiceMySqlEntity>{

    constructor(
        @InjectRepository(InvoiceMySqlEntity)
        private readonly repository: Repository<InvoiceMySqlEntity>
    ){}

//TODO: implementar metodos

    findAll(): Promise<InvoiceMySqlEntity[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<InvoiceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    create(entity: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    update(id: string, entity: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }


    
}

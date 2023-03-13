import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomerMySqlEntity } from "../entities/customer.entity";
import { IRepository } from './base/repository.base';

@Injectable()
export class CustomerRepository 
    implements IRepository<CustomerMySqlEntity>{

    constructor(
        @InjectRepository(CustomerMySqlEntity)
        private readonly repository: Repository<CustomerMySqlEntity>
    ){}

//TODO: implementar metodos

    async findAll(): Promise<CustomerMySqlEntity[]> {
        return await this.repository.find()
    }

    findById(id: string): Promise<CustomerMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}
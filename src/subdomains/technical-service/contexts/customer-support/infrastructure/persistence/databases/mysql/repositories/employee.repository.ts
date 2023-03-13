import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomerMySqlEntity } from "../entities";
import { EmployeeMySqlEntity } from '../entities/employee.entity';
import { IRepository } from "./base";

@Injectable()
export class EmployeeRepository 
    implements IRepository<EmployeeMySqlEntity>{

    constructor(
        @InjectRepository(CustomerMySqlEntity)
        private readonly repository: Repository<EmployeeMySqlEntity>
    ){}

//TODO: implementar metodos
    
    findAll(): Promise<EmployeeMySqlEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<EmployeeMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: EmployeeMySqlEntity): Promise<EmployeeMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: EmployeeMySqlEntity): Promise<EmployeeMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    }
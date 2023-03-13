import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WarrantyMySqlEntity } from "../entities";
import { IRepository } from "./base";

@Injectable()
export class WarrantyRepository implements IRepository<WarrantyMySqlEntity>{

    constructor(
        @InjectRepository(WarrantyMySqlEntity)
        private readonly repository: Repository<WarrantyMySqlEntity>
    ){}


    findAll(): Promise<WarrantyMySqlEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<WarrantyMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: WarrantyMySqlEntity): Promise<WarrantyMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: WarrantyMySqlEntity): Promise<WarrantyMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

//TODO: implementar metodos

    
    
}

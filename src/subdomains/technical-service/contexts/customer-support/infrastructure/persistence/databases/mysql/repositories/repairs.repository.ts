import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RepairsMySqlEntity } from "../entities";
import { IRepository } from "./base";

@Injectable()
export class RepairsRepository implements IRepository<RepairsMySqlEntity>{

    constructor(
        @InjectRepository(RepairsMySqlEntity)
        private readonly repository: Repository<RepairsMySqlEntity>
    ){}


    findAll(): Promise<RepairsMySqlEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<RepairsMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: RepairsMySqlEntity): Promise<RepairsMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: RepairsMySqlEntity): Promise<RepairsMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

//TODO: implementar metodos

    
    
}

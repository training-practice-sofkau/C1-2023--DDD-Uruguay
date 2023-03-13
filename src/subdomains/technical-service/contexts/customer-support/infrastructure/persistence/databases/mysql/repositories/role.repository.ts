import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleMySqlEntity } from "../entities";
import { IRepository } from "./base";

@Injectable()
export class RoleRepository implements IRepository<RoleMySqlEntity>{

    constructor(
        @InjectRepository(RoleMySqlEntity)
        private readonly repository: Repository<RoleMySqlEntity>
    ){}


    findAll(): Promise<RoleMySqlEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<RoleMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: RoleMySqlEntity): Promise<RoleMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: RoleMySqlEntity): Promise<RoleMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

//TODO: implementar metodos

    
    
}

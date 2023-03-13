import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SupportTicketMySqlEntity } from "../entities";
import { IRepository } from "./base";

@Injectable()
export class SupportTicketRepository implements IRepository<SupportTicketMySqlEntity>{

    constructor(
        @InjectRepository(SupportTicketMySqlEntity)
        private readonly repository: Repository<SupportTicketMySqlEntity>
    ){}


    findAll(): Promise<SupportTicketMySqlEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<SupportTicketMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    create(entity: SupportTicketMySqlEntity): Promise<SupportTicketMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: SupportTicketMySqlEntity): Promise<SupportTicketMySqlEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

//TODO: implementar metodos

    
    
}

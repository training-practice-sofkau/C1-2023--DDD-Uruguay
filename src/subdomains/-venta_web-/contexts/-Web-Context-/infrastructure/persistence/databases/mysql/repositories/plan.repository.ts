import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './base/repository.base';
import { PlanMySqlEntity } from '../entities/plan.entity';




@Injectable()
export class PlanRepository implements IRepository<PlanMySqlEntity>{

    constructor(@InjectRepository(PlanMySqlEntity) private readonly repository: Repository<PlanMySqlEntity>) { }


    async create(entity: PlanMySqlEntity): Promise<PlanMySqlEntity> {
        return await this.repository.save(entity)
    }


    async update(idPlan: string, entity: PlanMySqlEntity): Promise<PlanMySqlEntity> {
        const data = await this.repository.findOneBy({idPlan});
        
        if (data){
            const entidadUpdated = {...entity, idPlan};

            return this.repository.save(entidadUpdated)
        }
        throw new BadRequestException(`El plan con el id: ${idPlan} no se encuentra`)
    }

    async findAll(): Promise<PlanMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(idPlan: string): Promise<PlanMySqlEntity> {

        const plan = await this.repository.findOneBy({idPlan})

        if (!plan) throw new BadRequestException(`El cliente con el id: ${idPlan} no se encuentra`)

        return plan;
    }


    

    /*
    async delete(clientId: string): Promise<boolean> {
        const client = await this.repository.findOneBy({ clientId, deletedAt: undefined });
        if (!client) throw new BadRequestException(`Client with id: ${clientId} not found`)

        return true
    }
    */

}
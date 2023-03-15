import { Injectable } from "@nestjs/common";
import { PlanRepository } from "../repositories";
import { IPlanService, PlanDomainEntity } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import {  PlanMySqlEntity } from "../entities";




@Injectable()
export class PlanMySqlService implements IPlanService<PlanMySqlEntity> {


    constructor(private readonly planRepository: PlanRepository) {
    }


    //METODOS

    createPlan(plan: PlanMySqlEntity): Promise<PlanMySqlEntity> {
        return this.planRepository.create(plan)
    }

    updateCosto(entity: PlanMySqlEntity): Promise<PlanMySqlEntity> {
        return this.planRepository.update(entity.idPlan, entity)
    }

    updateNombre(entity: PlanMySqlEntity): Promise<PlanMySqlEntity> {
        return this.planRepository.update(entity.idPlan, entity)
    }

    obtenerPlan(idPlane: string): Promise<PlanDomainEntity> {
        return this.planRepository.findById(idPlane)
    }
    
}
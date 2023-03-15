import { PlanDomainEntity } from "../entities/membership/plan.domain-entity";

import { ICreatePlanMethod } from "../interfaces/commands/membership/createPlan.command";
import { IUpdateCostoMethod } from "../interfaces/commands/membership/plan";
import { IUpdateNombreMethod } from "../interfaces/commands/membership/plan/updateNombre.command"


export interface IPlanService <T extends PlanDomainEntity =  PlanDomainEntity>{
 
    createPlan(plan : ICreatePlanMethod) : Promise<PlanDomainEntity>;

    updateNombre(data : IUpdateNombreMethod) : Promise<PlanDomainEntity>;

    updateCosto(data : IUpdateCostoMethod) : Promise<PlanDomainEntity>;

    obtenerPlan(plane : string) : Promise <PlanDomainEntity>;

}

import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { PlanDomainEntity } from "../entities/membership/plan.domain-entity";
import { ICreateClienteMethod } from "../interfaces/commands/compra/createCliente.command";
import { IUpdateClientPhoneMethod } from "../interfaces/commands/compra/updateClientePhone.command";
import { ICreateMembershipMethod } from "../interfaces/commands/membership/createMembership.command";
import { ICreatePlaneMethod } from "../interfaces/commands/membership/createPlan.command";
import { IUpdateCostoPlanMethod } from "../interfaces/commands/membership/updateCostoPlan.command";
import { IUpdateNombrePlanMethod } from "../interfaces/commands/membership/updateNombrePlan.command";



export interface MembershipService <MembershipDomainEntity>{

    /*
    createCliente(cliente : ClienteDomainEntity) : Promise <ClienteDomainEntity>;
    createMembership(membership : MembershipDomainEntity ) : Promise<MembershipDomainEntity>;
    createPlan(plan : PlanDomainEntity) : Promise<PlanDomainEntity>;
    updateClientePhone(idMembership : string , idCliente : string , phone : number) : Promise<number>;
    updateCostoPlan(idMembership : string , idPlan : string , costo : number) : Promise<number>;
    updateNombrePlan(idMembership : string , idPlan : string , nombrePlan : string) : Promise<string>;
    */

    createCliente(cliente : ICreateClienteMethod) : Promise <ClienteDomainEntity>;
    createMembership(membership : ICreateMembershipMethod  ) : Promise<MembershipDomainEntity>;
    createPlan(plan : ICreatePlaneMethod) : Promise<PlanDomainEntity>;
    updateClientePhone(data : IUpdateClientPhoneMethod) : Promise<number>;
    updateCostoPlan(data : IUpdateCostoPlanMethod) : Promise<number>;
    updateNombrePlan(data  : IUpdateNombrePlanMethod): Promise<string>;

}

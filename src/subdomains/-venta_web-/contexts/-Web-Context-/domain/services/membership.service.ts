import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { PlanDomainEntity } from "../entities/membership/plan.domain-entity";



export interface MembershipService <MembershipDomainEntity>{

    createCliente(cliente : ClienteDomainEntity) : Promise <ClienteDomainEntity>;
    createMembership(membership : MembershipDomainEntity ) : Promise<MembershipDomainEntity>;
    createPlan(plan : PlanDomainEntity) : Promise<PlanDomainEntity>;
    updateClientePhone(idMembership : string , idCliente : string , phone : number) : Promise<number>;
    updateCostoPlan(idMembership : string , idPlan : string , costo : number) : Promise<number>;
    updateNombrePlan(idMembership : string , idPlan : string , nombrePlan : string) : Promise<string>;


}

import { ClienteDomainEntity } from "../../../entities/common-entities/cliente.domain-entity";
import { PlanDomainEntity } from "../../../entities/membership/plan.domain-entity";

export interface ICreateMembershipMethod {


    idMembership : string;
    newCliente : ClienteDomainEntity;
    newPlan : PlanDomainEntity;
                        

}
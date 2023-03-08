import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface } from "./i-cliente.domain-entity.interface";
import { IPlanDomainEntityInterface } from "./i-plan.domain-entity.interface";

export interface IMembershipDomainEntity {

    idMembership : string | UuidValueObject;
    clienteMembership : IClienteDomainEntityInterface;
    planMembership : IPlanDomainEntityInterface;
    

}

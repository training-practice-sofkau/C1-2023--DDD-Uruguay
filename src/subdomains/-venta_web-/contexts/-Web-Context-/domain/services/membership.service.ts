import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { MembershipDomainEntity } from "../entities/membership/membership.domain-entity";
import { PlanDomainEntity } from "../entities/membership/plan.domain-entity";
import { ICreateClienteMethod } from "../interfaces/commands/compra/createCliente.command";
import { ICreateMembershipMethod } from "../interfaces/commands/membership/createMembership.command";
import { ICreatePlaneMethod } from "../interfaces/commands/membership/createPlan.command";




export interface IMembershipService{

    createCliente(cliente : ICreateClienteMethod) : Promise <ClienteDomainEntity>;
    createMembership(membership : ICreateMembershipMethod  ) : Promise<MembershipDomainEntity>;
    createPlan(plan : ICreatePlaneMethod) : Promise<PlanDomainEntity>;


     //METODOS PARA OBTENER LAS ENTIDADES ASOCIADAS AL AGREGADO
     obtenerCliente(client : string) : Promise <ClienteDomainEntity>; //SE LE PASA UN ID?
     obtenerPlan(plane : string) : Promise <PlanDomainEntity>;

 

}

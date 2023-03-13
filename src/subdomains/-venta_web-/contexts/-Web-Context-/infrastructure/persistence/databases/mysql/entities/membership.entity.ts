import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"

import { ClienteDomainEntity, MembershipDomainEntity, PlanDomainEntity } from "src/subdomains";
import { ClienteMySqlEntity } from "./cliente.entity";
import { PlanMySqlEntity } from "./plan.entity";

@Entity()
export class MembershipMySqlEntity extends MembershipDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    idMembership: string;

    @JoinColumn()
    clienteMembership: ClienteMySqlEntity;

    @JoinColumn()
    planMembership: PlanDomainEntity;

    //RELACIONES

    @OneToOne( ()=> ClienteMySqlEntity, (cliente)=> cliente.membership )
    cliente: ClienteMySqlEntity;

    @OneToOne( ()=> PlanMySqlEntity, (plan)=> plan.membership )
    plan: PlanMySqlEntity;
}
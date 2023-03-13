import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClienteDomainEntity } from "src/subdomains";
import { MembershipMySqlEntity } from "./membership.entity";

@Entity()
export class PlanMySqlEntity extends ClienteDomainEntity {
    

    @PrimaryGeneratedColumn('uuid')
    idPlan: string;

    @Column()
    nombrePlan: string;

    @Column()
    dateInicioPlan: number;

    @Column()
    dateFinPlan: number;

    @Column()
    costoPlan: number;

    //RELACIONES

    @OneToOne( ()=> MembershipMySqlEntity, (menbership)=> menbership.plan )
    membership: MembershipMySqlEntity;
}
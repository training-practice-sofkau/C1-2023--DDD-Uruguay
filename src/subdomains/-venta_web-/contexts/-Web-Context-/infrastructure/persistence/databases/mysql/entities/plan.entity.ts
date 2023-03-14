import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"


import { MembershipMySqlEntity } from "./membership.entity";
import { ClienteDomainEntity } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";

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
    @JoinColumn()
    @OneToOne( ()=> MembershipMySqlEntity, (menbership)=> menbership.plan, {cascade:["insert", "update"]} )
    membership: MembershipMySqlEntity;
}
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClienteDomainEntity } from "src/subdomains";

@Entity()
export class ClienteMySqlEntity extends ClienteDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    clientId: string;

    @Column()
    fullName: string;

    @Column()
    phone: string;

    @OneToOne( ()=> OrderMySqlEntity, (order)=> order.client )
    order: OrderMySqlEntity;
}
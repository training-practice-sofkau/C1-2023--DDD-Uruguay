import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { CustomerDomainEntity } from '../../../../../domain/entities';
import { ReserveMySqlEntity } from "./reserve.entity";

@Entity()
export class CustomerMySqlEntity extends CustomerDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    customerId: string;

    @Column()
    fullName: string;

    @Column()
    document: number;

    @Column()
    paymentMethod: string;

    @OneToOne( ()=> ReserveMySqlEntity, (reserve)=> reserve.customer )
    reserve: ReserveMySqlEntity;
}
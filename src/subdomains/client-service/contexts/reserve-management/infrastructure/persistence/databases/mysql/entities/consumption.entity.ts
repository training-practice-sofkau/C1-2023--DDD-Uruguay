import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ConsumptionDomainEntity } from '../../../../../domain/entities';
import { CheckOutMySqlEntity } from ".";

@Entity()
export class ConsumptionMySqlEntity extends ConsumptionDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    consumptionId: string;

    @Column()
    miniBar: number;

    @Column()
    consumptionFood: number;

    @Column()
    laundry: number;

    @Column()
    extra: number;

    @OneToOne( ()=> CheckOutMySqlEntity, (checkOut)=> checkOut.consumption )
    checkOut: CheckOutMySqlEntity;
}
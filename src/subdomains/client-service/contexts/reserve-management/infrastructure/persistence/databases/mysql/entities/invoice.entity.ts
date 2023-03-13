import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { InvoiceDomainEntity } from '../../../../../domain/entities';
import { CheckOutMySqlEntity } from "./";

@Entity()
export class InvoiceMySqlEntity extends InvoiceDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    invoiceId: string;

    @Column()
    date: Date;

    @Column()
    cost: number;

    @OneToOne( ()=> CheckOutMySqlEntity, (checkOut)=> checkOut.invoice )
    checkOut: CheckOutMySqlEntity;
}
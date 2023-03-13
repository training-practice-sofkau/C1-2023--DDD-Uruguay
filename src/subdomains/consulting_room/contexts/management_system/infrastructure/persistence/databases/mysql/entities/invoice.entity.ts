import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { InvoiceDomainEntitybase } from '../../../../../domain/entities/invoice.domain-entity';
import { OrderMySqlEntity } from './order.entity';

@Entity()
export class InovoiceMySqlEntity extends InvoiceDomainEntitybase {

    @PrimaryGeneratedColumn('uuid')
    invoiceId: string;

    @Column()
    amount: number;

    @Column()
    date: number;

    @OneToOne( ()=> OrderMySqlEntity, (order)=> order.invoice)
    order: OrderMySqlEntity
}
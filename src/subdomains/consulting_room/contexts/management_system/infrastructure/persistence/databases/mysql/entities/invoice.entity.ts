import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { InvoiceDomainEntitybase } from '../../../../../domain/entities/invoice.domain-entity';
import { OrderMySqlEntity } from "./order.entity";

@Entity('invoice', { schema: 'public' })
export class InvoiceMySqlEntity extends InvoiceDomainEntitybase {
  @PrimaryGeneratedColumn('uuid')
  invoiceId?: string;

  @Column()
  amount: number;

  @Column()
  date: number;
  
  @OneToOne(() => OrderMySqlEntity, (order) => order.invoice)
  order: OrderMySqlEntity;
}
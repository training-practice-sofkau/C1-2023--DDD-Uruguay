import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { InvoiceDomainEntityBase } from '../../../../../domain/entities';
import {
  CompanyMySqlEntity,
  FeeMySqlEntity,
  OrderMySqlEntity,
} from './';

@Entity()
export class InvoiceMySqlEntity extends InvoiceDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
  invoiceId: string;
  
  @Column()
  status: boolean;

  @OneToOne( ()=> CompanyMySqlEntity, (entity)=> entity )
  company: CompanyMySqlEntity;

  @OneToOne( ()=> FeeMySqlEntity, (entity)=> entity )
  fee: FeeMySqlEntity;

  @OneToOne( ()=> OrderMySqlEntity, (entity)=> entity )
  order: OrderMySqlEntity;
      
  @Column()
  createdAt: number;

  @Column()
  updatedAt: number;
  
  @Column()
  deletedAt: number;
}
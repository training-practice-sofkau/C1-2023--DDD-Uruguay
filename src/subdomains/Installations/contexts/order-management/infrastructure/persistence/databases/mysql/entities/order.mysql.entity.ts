import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrderDomainEntityBase } from '../../../../../domain/entities';
import {
  BenefitedMySqlEntity,
  EmployedMySqlEntity,
  KitMySqlEntity,
} from './';

@Entity()
export class OrderMySqlEntity extends OrderDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column()
  status: boolean;

  @OneToOne( ()=> KitMySqlEntity, (entity)=> entity )
  kit: KitMySqlEntity;

  @OneToOne( ()=> EmployedMySqlEntity, (entity)=> entity )
  employed: EmployedMySqlEntity;

  @OneToOne( ()=> BenefitedMySqlEntity, (entity)=> entity )
  benefited: BenefitedMySqlEntity;
      
  @Column()
  createdAt: number;

  @Column()
  updatedAt: number;

  @Column()
  deletedAt: number;
}
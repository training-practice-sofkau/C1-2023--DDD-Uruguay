import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  BenefitedDomainEntityBase,
} from '../../../../../../domain/entities/order';

@Entity()
export class BenefitedMySqlEntity extends BenefitedDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
  benefitedId: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;
  
  @Column('uuid')
  companyId: string;

  @Column()
  createdAt: number;

  @Column()
  updatedAt: number;

  @Column()
  deletedAt: number;
}
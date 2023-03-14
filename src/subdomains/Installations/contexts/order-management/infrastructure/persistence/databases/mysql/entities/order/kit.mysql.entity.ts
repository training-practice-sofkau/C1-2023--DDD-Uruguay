import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { KitDomainEntityBase } from '../../../../../../domain/entities/order';

@Entity()
export class KitMySqlEntity extends KitDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
  kitId: string;

  @Column()
  model: string;
  
  @Column()
  createdAt: number;
  
  @Column()
  updatedAt: number;
  
  @Column()
  deletedAt: number;
}
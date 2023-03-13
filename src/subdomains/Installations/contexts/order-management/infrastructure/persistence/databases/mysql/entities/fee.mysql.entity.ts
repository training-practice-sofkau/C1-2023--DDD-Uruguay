import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { FeeDomainEntityBase } from '../../../../../domain/entities/invoice';

@Entity()
export class FeeMySqlEntity extends FeeDomainEntityBase {
	@PrimaryGeneratedColumn('uuid')
	feeId: string;
	
	@Column()
	tax: number;

	@Column()
	charge: number;

	@Column()
	createdAt: number;

	@Column()
	updatedAt: number;

	@Column()
	deletedAt: number;
}
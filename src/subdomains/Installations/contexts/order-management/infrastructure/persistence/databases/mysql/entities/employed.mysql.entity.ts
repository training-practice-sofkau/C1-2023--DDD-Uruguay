import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { EmployedDomainEntityBase } from '../../../../../domain/entities/order';

@Entity()
export class EmployedMySqlEntity extends EmployedDomainEntityBase {
	@PrimaryGeneratedColumn('uuid')
	employedId: string;

	@Column()
	name: string;

	@Column()
	phone: string;

	@Column()
	createdAt: number;

	@Column()
	updatedAt: number;

	@Column()
	deletedAt: number;
}
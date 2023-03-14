import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  CompanyDomainEntityBase,
} from '../../../../../../domain/entities/invoice';

@Entity()
export class CompanyMySqlEntity extends CompanyDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    companyId: string;

    @Column()
    name: string;

    @Column()
    bankAccount: string;

    @Column()
    createdAt: number;
    
    @Column()
    updatedAt: number;

    @Column()
    deletedAt: number;
}
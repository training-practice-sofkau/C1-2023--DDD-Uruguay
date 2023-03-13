import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice/warranty.domain-entity/warranty.domain-entity';

@Entity()
export class WarrantyMySqlEntity extends WarrantyDomainEntityBase{

    @PrimaryGeneratedColumn()
    warrantyID?: string;

    @Column()
    startDate?: number;

    @Column()
    itemsCovered?: string[];

    @Column()
    warrantyStatus?: string;

    @Column()
    endDate?: number;
}
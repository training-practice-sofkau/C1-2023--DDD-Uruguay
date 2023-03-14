import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice/warranty.domain-entity/warranty.domain-entity';
import { ItemValueObject, WarrantyStatusValueObject, DateValueObject, UUIDValueObject } from '../../../../../domain/value-objects';

@Entity('warranty')
export class WarrantyMySqlEntity extends WarrantyDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    warrantyID?: string ; //| UUIDValueObject;

    @Column()
    startDate?: number; // | Date | DateValueObject;

    @Column()
    warrantyStatus?: string ;//| WarrantyStatusValueObject;

    @Column()
    endDate?: number; // | Date | DateValueObject;
}
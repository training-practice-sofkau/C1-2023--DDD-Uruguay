import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice/warranty.domain-entity/warranty.domain-entity';
import { ItemValueObject, WarrantyStatusValueObject, DateValueObject, UUIDValueObject } from '../../../../../domain/value-objects';

@Entity()
export class WarrantyMySqlEntity extends WarrantyDomainEntityBase{

    @PrimaryGeneratedColumn()
    warrantyID?: string | UUIDValueObject;

    @Column()
    startDate?: number | Date | DateValueObject;

    @Column()
    itemsCovered?: string[] | ItemValueObject[];

    @Column()
    warrantyStatus?: string | WarrantyStatusValueObject;

    @Column()
    endDate?: number | Date | DateValueObject;
}
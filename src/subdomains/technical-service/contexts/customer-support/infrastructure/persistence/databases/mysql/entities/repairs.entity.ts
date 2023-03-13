import { DateValueObject, RepairValueObject, TrueFalseValueObject, UUIDValueObject } from "src/subdomains/technical-service/contexts/customer-support/domain/value-objects";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RepairsDomainEntityBase } from '../../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';

@Entity()
export class RepairsMySqlEntity extends RepairsDomainEntityBase{

    @PrimaryGeneratedColumn()
    repairID?: string | UUIDValueObject;

    @Column()
    repairDate?: number | Date | DateValueObject;

    @Column()
    repairs?: string[] | RepairValueObject[];

    @Column()
    workFinished?: boolean | TrueFalseValueObject;

}
import { DateValueObject, RepairValueObject, TrueFalseValueObject, UUIDValueObject } from "src/subdomains/technical-service/contexts/customer-support/domain/value-objects";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RepairsDomainEntityBase } from '../../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';

@Entity('repairs')
export class RepairsMySqlEntity extends RepairsDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    repairID?: string; // | UUIDValueObject;

    @Column()
    repairDate?: number; // | Date | DateValueObject;

    @Column()
    repairs?: string ; //| RepairValueObject[];

    @Column({default:false})
    workFinished?: boolean ; // | TrueFalseValueObject;

}
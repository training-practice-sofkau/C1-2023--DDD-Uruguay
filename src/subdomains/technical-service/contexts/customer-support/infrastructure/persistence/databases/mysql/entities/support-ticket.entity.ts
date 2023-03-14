import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../../../domain/value-objects";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket/service-ticket.domain-entity';

@Entity('support-ticket')
export class SupportTicketMySqlEntity extends SupportTicketDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    ticketID?:  string ; //| UUIDValueObject;

    @Column()
    dateOpen?: number ; //| Date | DateValueObject;

    @Column()
    deviceID?:  string; // | UUIDValueObject;

    @Column()
    repairsID?:  string ; //| UUIDValueObject;

    @Column()
    employeeID?:  string ; //| UUIDValueObject;

    @Column({default:true})
    isOpen?: boolean ;//| TrueFalseValueObject;

    @Column()
    dateClose?: number; // | Date | DateValueObject;
}
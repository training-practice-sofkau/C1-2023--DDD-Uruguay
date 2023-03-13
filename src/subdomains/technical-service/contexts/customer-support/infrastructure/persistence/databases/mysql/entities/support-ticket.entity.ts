import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket/service-ticket.domain-entity';

@Entity()
export class SupportTicketMySqlEntity extends SupportTicketDomainEntityBase{

    @PrimaryGeneratedColumn()
    ticketID: string;

    @Column()
    dateOpen?: number;

    @Column()
    deviceID?: string;

    @Column()
    repairsID?: string;

    @Column()
    employeeID?: string;

    @Column()
    isOpen?: boolean;

    @Column()
    dateClose?: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceDomainEntityBase } from '../../../../../domain/entities/invoice/';

@Entity()
export class InvoiceMySqlEntity extends InvoiceDomainEntityBase {

    @PrimaryGeneratedColumn()
    invoiceID: string;

    @Column()
    dateEmitted?: number;

    @Column()
    ticketID?: string;

    @Column()
    customerID?: string;

    @Column()
    invoiceAmount?: number;

    @Column()
    warrantyID?: string;

    @Column()
    isPaid?: boolean;

    @Column()
    createdAt?: number;

    @Column()
    updatedAt?: number;    

    @Column()
    deletedAt?: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceDomainEntityBase } from '../../../../../domain/entities/invoice/';
import { AmountValueObject, TrueFalseValueObject, DateValueObject, UUIDValueObject } from '../../../../../domain/value-objects';

@Entity()
export class InvoiceMySqlEntity extends InvoiceDomainEntityBase {

    @PrimaryGeneratedColumn()
    invoiceID?: string | UUIDValueObject;

    @Column()
    dateEmitted?:number | Date | DateValueObject;

    @Column()
    ticketID?: string | UUIDValueObject;

    @Column()
    customerID?: string | UUIDValueObject;

    @Column()
    invoiceAmount?: number | AmountValueObject;

    @Column()
    warrantyID?: string | UUIDValueObject;

    @Column()
    isPaid?: boolean | TrueFalseValueObject;

    @Column()
    createdAt?: number | Date;

    @Column()
    updatedAt?: number | Date;    

    @Column()
    deletedAt?: number | Date;
}
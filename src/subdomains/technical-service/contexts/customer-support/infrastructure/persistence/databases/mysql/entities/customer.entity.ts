import { CustomerDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/invoice";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PhoneValueObject, EmailValueObject, FullnameValueObject, UUIDValueObject } from '../../../../../domain/value-objects';

@Entity('customer')
export class CustomerMySqlEntity extends CustomerDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    customerID?: string; // | UUIDValueObject;

    @Column()
    customerName?: string; // | FullnameValueObject;

    @Column()
    customerEmail?: string; // | EmailValueObject;

    @Column()
    customerPhone?: string; // | PhoneValueObject;

    @Column()
    createdAt?: number;// | Date;

    @Column()    
    deletedAt?: number; //| Date;

    @Column()
    updatedAt?: number; // | Date;

    
}
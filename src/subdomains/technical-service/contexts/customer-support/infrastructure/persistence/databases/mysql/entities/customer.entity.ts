import { CustomerDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/invoice";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUIDValueObject } from '../../../../../domain/value-objects/common/uuid/uuid.value-object';
import { FullnameValueObject } from '../../../../../domain/value-objects/common/fullname/fullname.value-object';
import { EmailValueObject } from '../../../../../domain/value-objects/common/email/email.value-object';
import { PhoneValueObject } from '../../../../../domain/value-objects/common/phone/phone.value-object';

@Entity()
export class CustomerMySqlEntity extends CustomerDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    customerID?: string | UUIDValueObject;

    @Column()
    customerName?: string | FullnameValueObject;

    @Column()
    customerEmail?: string | EmailValueObject;

    @Column()
    customerPhone?: string | PhoneValueObject;

    @Column()
    createdAt?: number | Date;

    @Column()    
    deletedAt?: number | Date;

    @Column()
    updatedAt?: number | Date;

    
}
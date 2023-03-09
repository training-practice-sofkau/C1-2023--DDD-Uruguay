import { UUIDValueObject, TrueFalseValueObject, DateValueObject } from '../../../value-objects/common/';
import { AmountValueObject } from '../../../value-objects/invoice';

export interface IInvoiceDomainEntity {

    invoiceID?: string | UUIDValueObject;
    dateEmitted?: number | Date | DateValueObject;
    ticketID?: string | UUIDValueObject;
    customerID?: string | UUIDValueObject;
    invoiceAmount?: number | AmountValueObject;
    warrantyID?: string | UUIDValueObject;
    isPaid?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

}
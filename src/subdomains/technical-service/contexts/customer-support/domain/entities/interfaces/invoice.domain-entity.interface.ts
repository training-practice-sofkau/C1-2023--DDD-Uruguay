import { UUIDValueObject } from '../../value-objects/common/uuid/uuid.value-object';
import { DateValueObject } from '../../value-objects/common/date/date.value-object';
import { AmountValueObject } from '../../value-objects/invoice/amount.value-object';
import { WarrantyStatusValueObject } from '../../value-objects/warranty/warranty-status.value-object';
import { TrueFalseValueObject } from '../../value-objects/common';

export interface IInvoiceDomainEntity {

    invoiceID: string | UUIDValueObject;
    dateEmitted?: number | Date | DateValueObject;
    ticketID?: string | UUIDValueObject;
    customerID?: string | UUIDValueObject;
    invoiceAmount?: number | AmountValueObject;
    warranties?: WarrantyStatusValueObject[];
    isPaid?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

}
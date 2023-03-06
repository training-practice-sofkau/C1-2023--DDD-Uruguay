import { UUIDValueObject } from '../../value-objects/common/uuid/uuid.value-object';
import { DateValueObject } from '../../value-objects/common/date/date.value-object';
import { AmountValueObject } from '../../value-objects/invoice/amount.value-object';
import { WarrantyStatusValueObject } from '../../value-objects/warranty/warranty-status.value-object';

export interface IInvoiceDomainEntity {

    invoiceID: string | UUIDValueObject;
    dateEmitted: number | Date;
    ticketID: string;
    customerID: string;
    invoiceAmount: number | AmountValueObject;
    warranties: WarrantyStatusValueObject[];
    isPaid: boolean;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

}
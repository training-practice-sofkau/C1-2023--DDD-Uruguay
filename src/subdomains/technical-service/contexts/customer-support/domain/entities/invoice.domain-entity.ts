import { UUIDValueObject } from '../value-objects/common';
import { AmountValueObject } from '../value-objects/invoice/amount.value-object';
import { WarrantyStatusValueObject } from '../value-objects/warranty/warranty-status.value-object';
import { IInvoiceDomainEntity } from './interfaces/invoice.domain-entity.interface';

export class InvoiceDomainEntityBase implements IInvoiceDomainEntity{
  
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

    constructor(){

        //TODO: terminar Invoice Entity
    }
}
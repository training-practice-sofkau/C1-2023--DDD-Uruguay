import { v4 as uuid } from "uuid";
import { IsUUID, IsBoolean, IsValidDate } from '@validations';

import { DateValueObject, TrueFalseValueObject, AmountValueObject, UUIDValueObject } from '../../value-objects/';

import { IInvoiceDomainEntity } from '../interfaces/invoice/invoice.domain-entity.interface';


export class InvoiceDomainEntityBase implements IInvoiceDomainEntity {

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

    constructor(_data?: IInvoiceDomainEntity) {

        if (_data?.invoiceID && IsUUID(_data?.invoiceID)) this.invoiceID = _data.invoiceID;
        else this.invoiceID = uuid();

        if (_data?.dateEmitted && IsValidDate(_data.dateEmitted)) this.dateEmitted = _data.dateEmitted;

        if (_data?.ticketID && IsUUID(_data?.ticketID)) this.ticketID = _data.ticketID;

        if (_data?.customerID && IsUUID(_data?.customerID)) this.customerID = _data.customerID;

        if (_data?.invoiceAmount) this.invoiceAmount = _data.invoiceAmount;

        if (_data?.warrantyID) this.warrantyID = _data.warrantyID;

        if (_data?.isPaid && IsBoolean(_data?.isPaid)) this.isPaid = _data.isPaid;
        else this.isPaid = false;

        this.createdAt = Date.now();

    }
}
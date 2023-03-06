import { v4 as uuid } from "uuid";

import { UUIDValueObject } from '../value-objects/common';
import { AmountValueObject } from '../value-objects/invoice/amount.value-object';
import { WarrantyStatusValueObject } from '../value-objects/warranty/warranty-status.value-object';
import { IInvoiceDomainEntity } from './interfaces/invoice.domain-entity.interface';
import { TrueFalseValueObject } from '../value-objects/common/true-false/true-false.value-object';
import { IsUUID } from '../../../../../../libs/validations/is-uuid.validation';
import { IsValidDate } from "src/libs/validations/date.validation";
import { DateValueObject } from '../value-objects/common/date/date.value-object';
import { IsBoolean } from '../../../../../../libs/validations/true-false.validation';

export class InvoiceDomainEntityBase implements IInvoiceDomainEntity {

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

    constructor(_data?: IInvoiceDomainEntity) {

        if (_data?.invoiceID && IsUUID(_data?.invoiceID)) this.invoiceID = _data.invoiceID;
        else this.invoiceID = uuid();

        if (_data?.dateEmitted && IsValidDate(_data.dateEmitted)) this.dateEmitted = _data.dateEmitted;

        if (_data?.ticketID && IsUUID(_data?.ticketID)) this.ticketID = _data.ticketID;

        if (_data?.customerID && IsUUID(_data?.customerID)) this.customerID = _data.customerID;

        if (_data?.invoiceAmount) this.invoiceAmount = _data.invoiceAmount;

        if (_data?.warranties) this.warranties = _data.warranties;

        if (_data?.isPaid && IsBoolean(_data?.isPaid)) this.isPaid = _data.isPaid;
        else this.isPaid = false;

        this.createdAt = Date.now();

    }
}
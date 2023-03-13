import { v4 as uuidv4 } from 'uuid';
import { AmountObjectValue, DateTimeValueObject, InvoiceIdObjectValue } from '../value-objects';

import { IInvoiceDomainEntity } from './interfaces/';


export class InvoiceDomainEntitybase
    implements IInvoiceDomainEntity {

    invoiceId?: string | InvoiceIdObjectValue;
    amount?: number | AmountObjectValue;
    date?: number | DateTimeValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IInvoiceDomainEntity) {

        if (_data?.invoiceId)
            this.invoiceId = _data.invoiceId;
        else this.invoiceId = uuidv4()

        if (_data?.amount) this.amount = _data.amount;

        if (_data?.date) this.date = _data.date;

        this.createdAt = new Date();
    }
}



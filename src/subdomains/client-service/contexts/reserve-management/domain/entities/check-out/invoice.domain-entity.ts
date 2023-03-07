import { v4 as uuidv4 } from 'uuid';
import { IdValueObject, DateValueObject, CostValueObject } from "../../value-objects";
import { IInvoiceDomainEntity } from "../interfaces";

export class InvoiceDomainEntity implements IInvoiceDomainEntity{

    invoiceId: string | IdValueObject;
    date: Date | DateValueObject;
    cost: number | CostValueObject;

    constructor(_data?: IInvoiceDomainEntity) {
        if(_data.invoiceId) this.invoiceId = _data.invoiceId;
        else this.invoiceId = uuidv4();

        if(_data?.date) this.date = _data.date;

        if(_data?.cost) this.cost = _data.cost;
    }
}

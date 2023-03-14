import { v4 as uuidv4 } from 'uuid';
import { DateTimeValueObject, DescriptionValueObject, OrderIdObjectValue } from '../value-objects';

import {
    IClientDomainEntity,
    IInvoiceDomainEntity,
    IOrderDomainEntity,
} from './interfaces';


export class OrderDomainEntityBase
    implements IOrderDomainEntity {

    orderId?: string | OrderIdObjectValue;
    date?: number | DateTimeValueObject;
    description?: string | DescriptionValueObject;
    client: IClientDomainEntity;
    invoice: IInvoiceDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IOrderDomainEntity) {

        if (_data?.orderId)
            this.orderId = _data.orderId;
        else this.orderId = uuidv4();

        if (_data?.description) this.description = _data.description;

        if (_data?.date) this.date = _data.date;

        if (_data?.client) this.client = _data.client;

        if (_data?.invoice) this.invoice = _data.invoice;

        this.createdAt = new Date();
    }


}



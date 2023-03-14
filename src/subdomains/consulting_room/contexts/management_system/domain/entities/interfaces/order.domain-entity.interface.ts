import { IClientDomainEntity, IInvoiceDomainEntity } from ".";
import { DateTimeValueObject, DescriptionValueObject, OrderIdObjectValue } from "../../value-objects";


export interface IOrderDomainEntity {
    orderId?: string | OrderIdObjectValue;
    date?: number | DateTimeValueObject;
    description?: string | DescriptionValueObject;
    client: IClientDomainEntity;
    invoice: IInvoiceDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
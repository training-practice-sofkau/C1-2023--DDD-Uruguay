import { OrderIdValueObject } from '../../value-objects';

export interface IOrderDomainEntity {
    orderId?: string | OrderIdValueObject;
    date?: number | DateTimeValueObject;
    description?: string | DescriptionValueObject;
    client: IClientDomainEntity;
    invoice:  IInvoiceDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
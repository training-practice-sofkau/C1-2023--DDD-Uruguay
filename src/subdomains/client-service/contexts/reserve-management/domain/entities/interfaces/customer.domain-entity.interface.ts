import {
    DocumentValueObject,
    FullNameValueObject,
    IdValueObject,
    PaymentMethodValueObject
} from "../../value-objects";

export interface ICustomerDomainEntity {
    customerId?: string | IdValueObject;
    fullName?: string | FullNameValueObject;
    document?: number | DocumentValueObject;
    paymentMethod?: string | PaymentMethodValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}

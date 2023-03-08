import { EmployedIdValueObject, EmployedNameValueObject, EmployedPhoneValueObject } from '../../value-objects/order';

export interface IEmployedDomainEntity {
    employedId?: string | EmployedIdValueObject;
    name?: string | EmployedNameValueObject;
    phone?: string | EmployedPhoneValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
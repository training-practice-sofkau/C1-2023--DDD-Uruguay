import { ClientIdObjectValue, FullNameValueObject, PhoneObjectValue } from "../../value-objects";

export interface IClientDomainEntity {
    clientId?: string | ClientIdObjectValue;
    fullName?: string | FullNameValueObject;
    phone?: string | PhoneObjectValue;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}

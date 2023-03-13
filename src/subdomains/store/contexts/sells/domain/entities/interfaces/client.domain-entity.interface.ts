import { IdValueObject, NameValueObject, PhoneValueObject } from "../../value-objects"

export interface IClientDomainEntity {
    clientId?: string | IdValueObject
    phone?: number | PhoneValueObject
    name?: string | NameValueObject
}

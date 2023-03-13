import { IdValueObject, NameValueObject, SalaryValueObject } from "../../value-objects";

export interface ISellerDomainEntity {
    sellerId?: string | IdValueObject
    name?: string | NameValueObject
    salary?: number | SalaryValueObject
}

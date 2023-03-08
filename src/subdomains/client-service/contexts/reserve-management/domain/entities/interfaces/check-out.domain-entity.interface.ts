import { IdValueObject, DateValueObject, FullNameValueObject } from "../../value-objects";
import { IConsumptionDomainEntity, IInvoiceDomainEntity } from ".";


export interface ICheckOutDomainEntity {
    checkOutId: string | IdValueObject;
    endDate: Date | DateValueObject;
    recepsionistName: string | FullNameValueObject;
    invoice: IInvoiceDomainEntity;
    consumption: IConsumptionDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}

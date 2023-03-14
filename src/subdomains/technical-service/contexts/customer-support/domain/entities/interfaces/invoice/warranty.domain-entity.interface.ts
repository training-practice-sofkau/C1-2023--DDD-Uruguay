import { DateValueObject, UUIDValueObject } from "../../../value-objects/common";

import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";

export interface IWarrantyDomainEntity {

    warrantyID?: string | UUIDValueObject;
    startDate?:  number | Date | DateValueObject;
    endDate?:  number | Date | DateValueObject;    
    warrantyStatus?: string | WarrantyStatusValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
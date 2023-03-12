import { IGuestDomainEntity, IRoomKeyDomainEntity } from ".";
import { FullNameValueObject, IdValueObject, DateValueObject } from "../../value-objects";

export interface ICheckInDomainEntity {
    checkInId?: string | IdValueObject;
    reserveId?: string | IdValueObject;
    startDate?: Date | DateValueObject;
    recepsionistName?: string | FullNameValueObject;
    roomKey?: IRoomKeyDomainEntity;
    guest?: IGuestDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}

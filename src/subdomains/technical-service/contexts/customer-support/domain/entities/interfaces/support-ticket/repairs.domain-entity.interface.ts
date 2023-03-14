import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";
import { RepairValueObject } from '../../../value-objects/repair';

export interface IRepairsDomainEntity{

    repairID?: string | UUIDValueObject;
    repairDate?: number | Date | DateValueObject;
    repairs?: string | RepairValueObject;
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
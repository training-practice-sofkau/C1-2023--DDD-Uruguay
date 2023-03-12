import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";
import { FaultValueObject } from '../../../value-objects/repair';

export interface IRepairsDomainEntity{

    repairsID?: string | UUIDValueObject;
    repairsDate?: number | Date | DateValueObject;
    repairs?: FaultValueObject[];
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
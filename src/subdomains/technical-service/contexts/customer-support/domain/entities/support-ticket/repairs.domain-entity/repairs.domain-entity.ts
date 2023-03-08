import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, FaultValueObject, TrueFalseValueObject } from '../../../value-objects';
import { IRepairsDomainEntity } from '../../interfaces/support-ticket/';
import { IsBoolean, IsUUID, IsValidDate } from "src/libs/validations";


export class RepairsDomainEntityBase implements IRepairsDomainEntity{
    repairsID: string | UUIDValueObject;
    repairsDate?: number | Date | DateValueObject;
    repairs: FaultValueObject[];
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IRepairsDomainEntity){

        if(_data?.repairsID && IsUUID(_data?.repairsID)) this.repairsID = _data.repairsID;
        else this.repairsID = uuid();

        if(_data?.repairsDate && IsValidDate(_data?.repairsDate)) this.repairsDate = _data.repairsDate;

        if (_data?.repairs ) this.repairs = _data.repairs;      

        if (_data?.workFinished && IsBoolean(_data?.workFinished)) this.workFinished = _data.workFinished;

        this.createdAt = Date.now();
    }    
}
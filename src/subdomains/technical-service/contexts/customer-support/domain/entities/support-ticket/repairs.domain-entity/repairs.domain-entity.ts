import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, RepairValueObject, TrueFalseValueObject } from '../../../value-objects';
import { IRepairsDomainEntity } from '../../interfaces/support-ticket/';
import { IsBoolean, IsUUID, IsValidDate } from "src/libs/validations";


export class RepairsDomainEntityBase implements IRepairsDomainEntity{
    repairID: string | UUIDValueObject;
    repairDate?: number | Date | DateValueObject;
    repairs: string[] | RepairValueObject[];
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IRepairsDomainEntity){

        if(_data?.repairID && IsUUID(_data?.repairID)) this.repairID = _data.repairID;
        else this.repairID = uuid();

        if(_data?.repairDate && IsValidDate(_data?.repairDate)) this.repairDate = _data.repairDate;

        if (_data?.repairs ) this.repairs = _data.repairs;      

        if (_data?.workFinished && IsBoolean(_data?.workFinished)) this.workFinished = _data.workFinished;

        this.createdAt = Date.now();
    }    
}
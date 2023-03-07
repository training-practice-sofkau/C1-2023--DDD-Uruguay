import { v4 as uuidv4 } from 'uuid';
import { IdValueObject, DateValueObject, FullNameValueObject } from "../../value-objects";
import { ICheckInDomainEntity, IGuestDomainEntity, IRoomKeyDomainEntity } from "../interfaces";

export class CheckInDomainEntity implements ICheckInDomainEntity{

    checkInId: string | IdValueObject;
    reserveId: string | IdValueObject;
    startDate: Date | DateValueObject;
    recepsionistName: string | FullNameValueObject;
    roomKey: IRoomKeyDomainEntity;
    guest: IGuestDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: ICheckInDomainEntity) {
        if(_data.checkInId) this.checkInId = _data.checkInId;
        else this.checkInId = uuidv4();

        if(_data.reserveId) this.reserveId = _data.reserveId;

        if(_data?.startDate) this.startDate = _data.startDate;

        if(_data?.recepsionistName) this.recepsionistName = _data.recepsionistName;

        if(_data?.roomKey) this.roomKey = _data.roomKey;

        if(_data?.guest) this.guest = _data.guest;

        this.createdAt = new Date();
    }
}

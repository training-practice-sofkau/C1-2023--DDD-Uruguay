import { IdValueObject, DateValueObject, NumberOfGuestsValueObject } from "../../value-objects";
import { ICustomerDomainEntity, IReserveDomainEntity, IRoomDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export class ReserveDomainEntity implements IReserveDomainEntity{

    reserveId: string | IdValueObject;
    startDate: Date | DateValueObject;
    endDate?: Date | DateValueObject;
    numberOfGuests: number | NumberOfGuestsValueObject;
    room: IRoomDomainEntity;
    customer: ICustomerDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IReserveDomainEntity) {
        if(_data.reserveId) this.reserveId = _data.reserveId;
        else this.reserveId = uuidv4();

        if(_data?.startDate) this.startDate = _data.startDate;

        if(_data?.endDate) this.endDate = _data.endDate;

        if(_data?.numberOfGuests) this.numberOfGuests = _data.numberOfGuests;

        if(_data?.room) this.room = _data.room;

        if(_data?.customer) this.customer = _data.customer;

        this.createdAt = new Date();
    }
}

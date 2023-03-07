import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, TrueFalseValueObject } from '../../value-objects';
import { ISupportTicketEntity as ISupportTicketDomainEntity } from '../interfaces/support-ticket';
import { IsBoolean, IsUUID, IsValidDate } from '../../../../../../../libs/validations';

export class SupportTicketDomainEntityBase implements ISupportTicketDomainEntity{
    ticketID: string | UUIDValueObject;
    dateOpen?: number | Date | DateValueObject;
    deviceID?: string | UUIDValueObject;
    repairsID?: string | UUIDValueObject;
    employeeID?: string | UUIDValueObject;
    isOpen?: boolean | TrueFalseValueObject;
    dateClose?: number | Date | DateValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: ISupportTicketDomainEntity){

        if(_data?.ticketID && IsUUID(_data?.ticketID)) this.ticketID = _data.ticketID;
        else this.ticketID = uuid();

        if(_data?.dateOpen && IsValidDate(_data?.dateOpen)) this.dateOpen = _data.dateOpen;

        if (_data?.deviceID && IsUUID(_data?.deviceID)) this.deviceID = _data.deviceID;

        if (_data?.repairsID && IsUUID(_data?.repairsID)) this.repairsID = _data.repairsID;

        if (_data?.employeeID && IsUUID(_data?.employeeID)) this.employeeID = _data.employeeID;

        if(_data?.dateClose && IsValidDate(_data?.dateClose)) this.dateClose = _data.dateClose;

        if (_data?.isOpen && IsBoolean(_data?.isOpen)) this.isOpen = _data.isOpen;

        this.createdAt = Date.now();
    }
}
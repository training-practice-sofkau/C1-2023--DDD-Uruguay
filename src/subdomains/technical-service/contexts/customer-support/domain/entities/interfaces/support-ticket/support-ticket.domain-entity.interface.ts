import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from '../../../value-objects/common';

export interface ISupportTicketEntity{

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

}
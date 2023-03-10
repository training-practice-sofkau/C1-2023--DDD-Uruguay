import { UUIDValueObject, DateValueObject } from "../../../value-objects/common";


export interface IOpenNewTicketCommand{

    ticketID: string;
    openDate: Date;
    deviceID: string; 
    employeeID: string; 
    
}
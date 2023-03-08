import { UUIDValueObject, DateValueObject } from "../../../value-objects/common";


export interface IOpenNewTicketCommand{

    ticketID: string;
    openDate: number | Date;
    deviceID: string; 
    employeeID: string; 
    
}
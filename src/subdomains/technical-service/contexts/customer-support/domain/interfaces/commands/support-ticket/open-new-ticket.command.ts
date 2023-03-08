import { UUIDValueObject, DateValueObject } from "../../../value-objects/common";


export interface IOpenNewTicketCommand{

    ticketID: string | UUIDValueObject;   
    openDate: number | Date | DateValueObject;
    deviceID: string | UUIDValueObject; 
    employeeID: string | UUIDValueObject; 
    
}
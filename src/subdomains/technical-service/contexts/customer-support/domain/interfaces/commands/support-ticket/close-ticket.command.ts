import { UUIDValueObject } from "../../../value-objects/common";

export interface ICloseTicketCommand{

    ticketID: string | UUIDValueObject;    
}
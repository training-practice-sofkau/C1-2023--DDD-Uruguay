import { EmailValueObject, FullnameValueObject, PhoneValueObject } from "../../../value-objects/common";

export interface ICreateCustomerCommand{

    customerName: string ;
    customerEmail: string ;
    customerPhone: string ; 
    
}
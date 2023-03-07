import { EmailValueObject, FullnameValueObject, PhoneValueObject } from "../../../value-objects/common";

export interface ICreateCustomerCommand{

    customerName: string | FullnameValueObject;
    customerEmail: string | EmailValueObject;
    customerPhone: string | PhoneValueObject; 
    
}
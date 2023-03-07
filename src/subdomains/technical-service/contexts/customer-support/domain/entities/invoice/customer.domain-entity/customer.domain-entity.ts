import { v4 as uuid } from "uuid";

import { UUIDValueObject, FullnameValueObject, EmailValueObject, PhoneValueObject } from "../../../value-objects/common";
import { ICustomerDomainEntity } from '../../interfaces/invoice/';
import { IsValidFullname, IsUUID, IsEmail, IsPhoneNumber  } from '../../../../../../../../libs/validations';



export class CustomerDomainEntityBase implements ICustomerDomainEntity {    
    
    customerID: string | UUIDValueObject;
    customerName: string | FullnameValueObject;
    customerEmail: string | EmailValueObject;
    customerPhone: string | PhoneValueObject;    
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: ICustomerDomainEntity){

        if(_data?.customerID && IsUUID(_data.customerID)) this.customerID = _data.customerID;
        else this.customerID = uuid();

        if(_data?.customerName && IsValidFullname(_data?.customerName)) this.customerName = _data.customerName;

        if(_data?.customerEmail && IsEmail(_data?.customerEmail)) this.customerEmail = _data.customerEmail;

        if(_data?.customerPhone && IsPhoneNumber(_data?.customerPhone)) this.customerPhone = _data.customerPhone;

        this.createdAt = Date.now();
    }  
     
}
import { IsUUID } from "../../../../../../../../libs/validations/is-uuid.validation";
import { v4 as uuid } from "uuid";

import { UUIDValueObject, FullnameValueObject, EmailValueObject, PhoneValueObject } from "../../../value-objects/common";
import { ICustomerDomainEntity } from '../../interfaces/invoice/customer.domain-entity.interface';
import { IsValidFullname } from '../../../../../../../../libs/validations/fullname.validation';
import { IsEmail } from '../../../../../../../../libs/validations/email.validation';
import { IsPhoneNumber } from '../../../../../../../../libs/validations/phone.validation';


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



   /*  public Customer( customerName: FullnameValueObject, customerMail: EmailValueObject, customerPhone: PhoneValueObject ){
        
        this.customerID = new UUIDValueObject();
        this.customerName = customerName;
        this.customerEmail = customerMail;       
        this.customerPhone = customerPhone;       
        this.createdAt = Date.now();
    } */


    /**
     * Changes the current Email address of the customer for the given new value 
     *
     * @param {EmailValueObject} newEmail new value
     * @memberof Customer
     */
    public changeCustomerEmail(newEmail: EmailValueObject){

        //TODO: check validations ( ? )

        this.customerEmail = newEmail;

        return this.customerEmail;
    }

    /**
     * Changes the current Phone number of the customer for the given new value 
     *
     * @param {PhoneValueObject} newPhone new value
     * @memberof Customer
     */
    public changeCustomerPhone(newPhone: PhoneValueObject){

        //TODO: check validations ( ? )

        this.customerPhone = newPhone;

        return this.customerPhone;
    }


    public sendNotification(){

        //TODO: implementar el codigo para "enviar notificacion al customer"
    }

     
}
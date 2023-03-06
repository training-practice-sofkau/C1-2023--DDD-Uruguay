import { UUIDValueObject, FullnameValueObject, EmailValueObject, PhoneValueObject } from "../../../value-objects/common";


export class Customer {
    
    private customerID: UUIDValueObject;
    private customerName: FullnameValueObject;
    private customerEmail: EmailValueObject;
    private customerPhone: PhoneValueObject;    

    public Customer( customerName: FullnameValueObject, customerMail: EmailValueObject, customerPhone: PhoneValueObject ){
        
        this.customerID = new UUIDValueObject();
        this.customerName = customerName;
        this.customerEmail = customerMail;       
        this.customerPhone = customerPhone;       
    }


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
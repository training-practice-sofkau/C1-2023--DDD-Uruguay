import { v4 as uuidv4 } from 'uuid';
import { ICustomerDomainEntity } from "../interfaces";
import { 
    IdValueObject, 
    FullNameValueObject, 
    DocumentValueObject, 
    PaymentMethodValueObject 
} from "../../value-objects";


export class CustomerDomainEntity implements ICustomerDomainEntity{

    customerId?: string | IdValueObject;
    fullName: string | FullNameValueObject;
    document: number | DocumentValueObject;
    paymentMethod?: string | PaymentMethodValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: ICustomerDomainEntity) {
        if(_data.customerId) this.customerId = _data.customerId;
        else this.customerId = uuidv4();

        if(_data?.fullName) this.fullName = _data.fullName;

        if(_data?.document) this.document = _data.document;

        if(_data?.paymentMethod) this.paymentMethod = _data.paymentMethod;

        this.createdAt = new Date();
    }
}

import { UUIDValueObject } from '../../../../value-objects/common/uuid/uuid.value-object';
import { PhoneValueObject } from '../../../../value-objects/common/phone/phone.value-object';

export interface IChangeCustomerPhoneCommand{

    customerID: string | UUIDValueObject;
    phoneNumber: string | PhoneValueObject;
    
}
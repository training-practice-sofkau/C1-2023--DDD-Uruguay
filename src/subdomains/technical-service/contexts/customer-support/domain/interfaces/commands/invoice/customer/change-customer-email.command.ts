import { UUIDValueObject } from '../../../../value-objects/common/uuid/uuid.value-object';
import { EmailValueObject } from '../../../../value-objects/common/email/email.value-object';

export interface IChangeCustomerEmailCommand{

    customerID: string;
    newEmail: string;
    
}
import { UUIDValueObject, NoteValueObject } from '../../../value-objects/common';

export interface INotifyCustomerCommand{
    customerID?: string;
    message?: string;
}
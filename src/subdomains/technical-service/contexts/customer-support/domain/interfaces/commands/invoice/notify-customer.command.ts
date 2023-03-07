import { UUIDValueObject, NoteValueObject } from '../../../value-objects/common';

export interface INotifyCustomerCommand{
    customerID?: string | UUIDValueObject;
    message?: string | NoteValueObject;
}
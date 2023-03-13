import { UUIDValueObject, NoteValueObject, FullnameValueObject, EmailValueObject } from '../../../value-objects/common';

export interface IChangeEmployeeMailCommand {
 
    employeeID?: string; 
    employeeNewEmail?: string;
}
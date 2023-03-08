import { UUIDValueObject, NoteValueObject, FullnameValueObject, EmailValueObject } from '../../../value-objects/common';

export interface ICreateEmployeeCommand {

    employeeFullname?: string | FullnameValueObject;
    employeeEmail?: string | EmailValueObject;
    employeeRoleID?: string | UUIDValueObject; 

}
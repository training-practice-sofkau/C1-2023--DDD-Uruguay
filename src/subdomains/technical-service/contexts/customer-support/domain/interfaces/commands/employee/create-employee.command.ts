import { UUIDValueObject, NoteValueObject, FullnameValueObject, EmailValueObject } from '../../../value-objects/common';

export interface ICreateEmployeeCommand {

    employeeFullname?: string;
    employeeEmail?: string;
    employeeRoleID?: string;

}
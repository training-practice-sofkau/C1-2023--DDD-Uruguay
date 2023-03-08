import { UUIDValueObject, TrueFalseValueObject } from '../../../value-objects/common';

export interface IChangeEmployeeStatusCommand {
 
    employeeID?: string; 
    newStatus?: boolean;
}
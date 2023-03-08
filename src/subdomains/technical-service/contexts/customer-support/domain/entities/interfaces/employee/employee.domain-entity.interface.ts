import { UUIDValueObject, FullnameValueObject, EmailValueObject, TrueFalseValueObject } from '../../../value-objects/common';

export interface IEmployeeDomainEntity{
    employeeID: string | UUIDValueObject;
    employeeName: string | FullnameValueObject;
    employeeEmail: string | EmailValueObject;
    employeeRoleId: string | UUIDValueObject;
    employeeIsActive: boolean | TrueFalseValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
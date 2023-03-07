import { NoteValueObject, UUIDValueObject } from '../../../value-objects/common';
import { RoleValueObject } from '../../../value-objects/employee/role.value-object';

export interface IRoleDomainEntity{

    roleID: string | UUIDValueObject;
    roleName: string | RoleValueObject;
    roleDescription: string | NoteValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
   
}
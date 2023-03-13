import { RoleValueObject, NoteValueObject, UUIDValueObject } from '../../../value-objects';

export interface IRoleDomainEntity{

    roleID?: string | UUIDValueObject;
    roleName?: string | RoleValueObject;
    roleDescription?: string | NoteValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
   
}
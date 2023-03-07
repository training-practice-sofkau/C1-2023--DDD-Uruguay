import { UUIDValueObject, NoteValueObject, FullnameValueObject, EmailValueObject } from '../../../../value-objects/common';

export interface ICreateRoleCommand {

    roleName?: string | FullnameValueObject;
    roleDescription?: string | NoteValueObject;  
    
}
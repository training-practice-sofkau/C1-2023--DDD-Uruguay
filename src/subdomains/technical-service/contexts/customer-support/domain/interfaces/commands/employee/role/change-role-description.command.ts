import { UUIDValueObject, NoteValueObject } from '../../../../value-objects/common';

export interface IChangeRoleDescriptionCommand {

    roleID?: string | UUIDValueObject;
    newDescription?: string | NoteValueObject;  
}
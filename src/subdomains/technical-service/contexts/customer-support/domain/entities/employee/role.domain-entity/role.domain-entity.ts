import { v4 as uuid } from "uuid";

import { IsUUID } from "src/libs/validations";
import { UUIDValueObject, NoteValueObject, RoleValueObject } from "../../../value-objects";
import { IRoleDomainEntity } from "../../interfaces/employee";

export class RoleDomainEntityBase implements IRoleDomainEntity {
    roleID?: string | UUIDValueObject;
    roleName?: string | RoleValueObject;
    roleDescription?: string | RoleValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IRoleDomainEntity) {

        if(_data?.roleID && IsUUID(_data?.roleID)) this.roleID = _data.roleID;
        else this.roleID = uuid();

        if(_data?.roleName) this.roleName = _data.roleName;

        if(_data?.roleDescription) this.roleDescription = _data.roleDescription;

        this.createdAt = Date.now();
    }
}
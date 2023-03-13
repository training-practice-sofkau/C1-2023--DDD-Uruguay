import { RoleDomainEntityBase } from "../../../../../entities/employee/role.domain-entity/role.domain-entity";
import { IRoleDomainEntity } from "../../../../../entities/interfaces";
import { RoleCreatedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IRoleDomainService } from '../../../../../services/employee';

export const CreateRole = async (
    data: RoleDomainEntityBase,
    roleService: IRoleDomainService,
    roleCreatedEventPublisherBase: RoleCreatedEventPublisherBase
): Promise<IRoleDomainEntity | null> => {

    const result = await roleService.CreateRole(data);
    roleCreatedEventPublisherBase.response = result;
    roleCreatedEventPublisherBase.publish();

    return result;
}
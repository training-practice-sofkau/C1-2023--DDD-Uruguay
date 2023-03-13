import { RoleDomainEntityBase } from "../../../../../entities/employee/role.domain-entity";
import { RoleDescriptionChangedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IRoleDomainService } from '../../../../../services/employee/';

export const ChangeRoleDescription = async (
    data: RoleDomainEntityBase,
    roleService: IRoleDomainService,
    roleDescriptionChangedEventPublisherBase: RoleDescriptionChangedEventPublisherBase
): Promise<boolean> => {

    const result = await roleService.ChangeRoleDescription(data);
    roleDescriptionChangedEventPublisherBase.response = result;
    roleDescriptionChangedEventPublisherBase.publish();

    return result;
}
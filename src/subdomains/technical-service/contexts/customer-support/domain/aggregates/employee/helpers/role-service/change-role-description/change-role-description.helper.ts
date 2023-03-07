import { RoleDescriptionChangedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IChangeRoleDescriptionCommand } from '../../../../../interfaces/commands/employee';
import { IRoleDomainService } from '../../../../../services/employee/';

export const ChangeRoleDescription = async (
    data: IChangeRoleDescriptionCommand,
    roleService: IRoleDomainService,
    roleDescriptionChangedEventPublisherBase: RoleDescriptionChangedEventPublisherBase
): Promise<boolean> => {

    const result = await roleService.ChangeRoleDescription(data);
    roleDescriptionChangedEventPublisherBase.response = result;
    roleDescriptionChangedEventPublisherBase.publish();

    return result;
}
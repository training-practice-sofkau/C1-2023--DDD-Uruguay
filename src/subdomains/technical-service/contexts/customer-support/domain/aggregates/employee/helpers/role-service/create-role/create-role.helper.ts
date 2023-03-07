import { RoleCreatedEventPublisherBase } from "../../../../../events/publishers/employee";
import { ICreateRoleCommand } from '../../../../../interfaces/commands/employee';
import { IRoleDomainService } from '../../../../../services/employee/role.domain-service';

export const CreateRole = async (
    data: ICreateRoleCommand,
    roleService: IRoleDomainService,
    roleCreatedEventPublisherBase: RoleCreatedEventPublisherBase
): Promise<boolean> => {

    const result = await roleService.CreateRole(data);
    roleCreatedEventPublisherBase.response = result;
    roleCreatedEventPublisherBase.publish();

    return result;
}
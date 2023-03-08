import { IChangeRoleDescriptionCommand } from '../../interfaces';
import { ICreateRoleCommand } from '../../interfaces/commands/employee';

export interface IRoleDomainService{

    CreateRole(roleData: ICreateRoleCommand) : Promise < boolean >;

    ChangeRoleDescription(data: IChangeRoleDescriptionCommand) : Promise < boolean >;

}
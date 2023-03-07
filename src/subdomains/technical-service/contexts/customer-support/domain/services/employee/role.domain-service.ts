import { IChangeRoleDescriptionCommand } from '../../interfaces';
import { ICreateRoleCommand } from '../../interfaces/commands/employee';

export interface IRoleDomainService{

    createRole(roleData: ICreateRoleCommand) : Promise < boolean >;

    changeRoleDescription(data: IChangeRoleDescriptionCommand) : Promise < boolean >;

}
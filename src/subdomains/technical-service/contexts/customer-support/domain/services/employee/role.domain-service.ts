import { RoleDomainEntityBase } from '../../entities/employee/role.domain-entity/role.domain-entity';
import { IRoleDomainEntity } from '../../entities/interfaces';
import { IChangeRoleDescriptionCommand } from '../../interfaces';


export interface IRoleDomainService{

    CreateRole(roleData: RoleDomainEntityBase) : Promise < IRoleDomainEntity | null >;

    ChangeRoleDescription(data: IChangeRoleDescriptionCommand) : Promise < boolean >;

}
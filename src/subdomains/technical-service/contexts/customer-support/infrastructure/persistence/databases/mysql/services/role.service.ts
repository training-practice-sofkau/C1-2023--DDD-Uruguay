import { Injectable } from '@nestjs/common';
import { RoleDomainEntityBase } from '../../../../../domain/entities/employee/role.domain-entity';
import { IRoleDomainEntity } from '../../../../../domain/entities/interfaces';
import { IRoleDomainService } from '../../../../../domain/services';
import { RoleRepository } from '../repositories/role.repository';

@Injectable()
export class RoleMySqlService implements IRoleDomainService{

    constructor(
        private readonly roleRepository: RoleRepository
    ){}

    /**
     * Adds a new ROle to DB
     *
     * @param {RoleDomainEntityBase} roleData
     * @return {*}  {Promise<IRoleDomainEntity>}
     * @memberof RoleMySqlService
     */
    async CreateRole(roleData: RoleDomainEntityBase): Promise<IRoleDomainEntity> {
        
        return await this.roleRepository.create(roleData);
    }

    /**
     * changes the description of the given role
     *
     * @param {RoleDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof RoleMySqlService
     */
    async ChangeRoleDescription(data: RoleDomainEntityBase): Promise<boolean> {
          
        if(this.roleRepository.update(data)) return await true;

        return false;
    }

    
}
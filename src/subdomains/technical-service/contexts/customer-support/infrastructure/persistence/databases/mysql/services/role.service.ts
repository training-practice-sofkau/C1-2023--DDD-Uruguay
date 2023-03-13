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



    CreateRole(roleData: RoleDomainEntityBase): Promise<IRoleDomainEntity> {
        throw new Error('Method not implemented.');
    }
    ChangeRoleDescription(data: RoleDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

//TODO: implementar metodos
    
    
}
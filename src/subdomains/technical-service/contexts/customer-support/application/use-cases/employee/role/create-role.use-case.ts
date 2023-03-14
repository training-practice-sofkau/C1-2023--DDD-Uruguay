import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '@sofka';

import { IRoleCreatedResponse, ICreateRoleCommand } from '../../../../domain/interfaces';
import { EmployeeAggregate } from '../../../../domain/aggregates/';
import { IRoleDomainService } from '../../../../domain/services/';
import { RoleCreatedEventPublisherBase } from '../../../../domain/events/publishers';
import { IRoleDomainEntity } from '../../../../domain/entities/interfaces/employee/';
import { RoleValueObject, NoteValueObject } from '../../../../domain/value-objects/';
import { RoleDomainEntityBase } from '../../../../domain/entities/employee/role.domain-entity';

export class CreateRoleUseCase<
    Command extends ICreateRoleCommand = ICreateRoleCommand,
    Response extends IRoleCreatedResponse = IRoleCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {

    private readonly employeeAggregateRoot: EmployeeAggregate;

    constructor(
        private readonly roleService: IRoleDomainService,
        private readonly roleCreatedEventPublisherBase: RoleCreatedEventPublisherBase
    ) {
        super();
        this.employeeAggregateRoot = new EmployeeAggregate({
            roleService,
            roleCreatedEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {

        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;
    }

    /**
     * executes all the steps needed to make a new entity
     *
     * @private
     * @param {Command} command
     * @return {*}  {Promise<IRoleDomainEntity>}
     * @memberof CreateRoleUseCase
     */
    private async executeCommand(command: Command): Promise<IRoleDomainEntity> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createEntityRoleDomain(VO);

        return this.executeCreateEmployeeAggregateRoot(entity); 
    }  

    /**
     * Generates a New ValueObject of type Role
     *
     * @param {Command} command
     * @return {*}  {IRoleDomainEntity}
     * @memberof CreateRoleUseCase
     */
    createValueObject(command: Command): IRoleDomainEntity {

        const roleName = new RoleValueObject(command.roleName);
        const roleDescription = new NoteValueObject(command.roleDescription);

        return {
            roleName,
            roleDescription
        }
    }


    /**
     * Checks that the information of the new VO is valid
     *
     * @param {IRoleDomainEntity} VO
     * @memberof CreateRoleUseCase
     */
    validateValueObject(VO: IRoleDomainEntity) {

        const {
            roleName,
            roleDescription
        } = VO;

        // validates the role name
        if (roleName instanceof RoleValueObject && roleName.hasErrors())
            this.setErrors(roleName.getErrors());

        // validates the role description
        if (roleDescription instanceof NoteValueObject && roleDescription.hasErrors())
            this.setErrors(roleDescription.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'CreateRoleUseCase command execution return some errors!',
                this.getErrors(),
            );
    }

    /**
     * Creates and returns a new Role Entity
     *
     * @param {IRoleDomainEntity} VO
     * @return {*} 
     * @memberof CreateRoleUseCase
     */
    createEntityRoleDomain(VO: IRoleDomainEntity) {
        const {
            roleName,
            roleDescription
        } = VO;

        return new RoleDomainEntityBase({

            roleName: roleName.valueOf(),
            roleDescription: roleDescription.valueOf()
        })
    }   

    /**
     * Executes the method in the aggregate
     *
     * @param {RoleDomainEntityBase} entity
     * @return {*}  {(Promise < IRoleDomainEntity | null >)}
     * @memberof CreateRoleUseCase
     */
    executeCreateEmployeeAggregateRoot(
        entity: RoleDomainEntityBase
        ): Promise < IRoleDomainEntity | null > {
        
            return this.employeeAggregateRoot.CreateRole(entity);
    }

}
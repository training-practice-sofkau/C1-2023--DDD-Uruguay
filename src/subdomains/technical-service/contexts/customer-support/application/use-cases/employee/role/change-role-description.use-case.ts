import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '@sofka';

import { IRoleDescriptionChangedResponse, IChangeRoleDescriptionCommand } from '../../../../domain/interfaces/';

import { EmployeeAggregate } from '../../../../domain/aggregates/employee/employee.aggregate';
import { IEmployeeDomainService } from '../../../../domain/services/employee/employee.domain-service';
import { EmployeeStatusChangedEventPublisherBase } from '../../../../domain/events/publishers/employee/employee-status-changed.event-publisher';
import { RoleValueObject, UUIDValueObject } from '../../../../domain/value-objects/';

import { IRoleDomainEntity } from '../../../../domain/entities/interfaces/employee/role.domain-entity.interface';
import { RoleDomainEntityBase } from '../../../../domain/entities/employee/role.domain-entity/role.domain-entity';



export class ChangeRoleDescriptionUseCase<
    Command extends IChangeRoleDescriptionCommand = IChangeRoleDescriptionCommand,
    Response extends IRoleDescriptionChangedResponse = IRoleDescriptionChangedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {

    private readonly employeeAggregateRoot: EmployeeAggregate;

    constructor(
        private readonly employeeService: IEmployeeDomainService,
        private readonly employeeStatusChangedEventPublisherBase: EmployeeStatusChangedEventPublisherBase
    ) {
        super();
        this.employeeAggregateRoot = new EmployeeAggregate({
            employeeService,
            employeeStatusChangedEventPublisherBase
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
     * @return {*} 
     * @memberof ChangeRoleDescriptionUseCase
     */
    private async executeCommand (command: Command) {
        const VO = this.createValueObject(command);
        this.validateValueObject(VO);
        
        const entity = this.createRoleEntity(VO);

        return this.executeChangeRoleDescriptionAggregateRoot(entity);
    }
    
   
    /**
     * Generates a Role entity type with only the needed values (new description)
     *
     * @param {Command} command
     * @return {*} 
     * @memberof ChangeRoleDescriptionUseCase
     */
    createValueObject (command: Command) : IRoleDomainEntity {
     
        const roleID = new UUIDValueObject(command.roleID);
        const roleDescription = new RoleValueObject(command.newDescription);

        return {
            roleID,            
            roleDescription
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IRoleDomainEntity} VO
     * @memberof ChangeRoleDescriptionUseCase
     */
    validateValueObject(VO: IRoleDomainEntity) {
       
        const  {
            roleID,            
            roleDescription
        } = VO;

        // validates Role ID
        if(roleID instanceof UUIDValueObject && roleID.hasErrors())
            this.setErrors(roleID.getErrors());

        // validates Role Description
        if(roleDescription instanceof RoleValueObject && roleDescription.hasErrors())
        this.setErrors(roleDescription.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
            'ChangeRoleDescriptionUseCase command execution return some errors!',
            this.getErrors(),
        );
    }


    /**
     * Creates and returns a new Role Entity with only the needed info
     *
     * @param {IRoleDomainEntity} VO
     * @return {*} 
     * @memberof ChangeRoleDescriptionUseCase
     */
    createRoleEntity(VO: IRoleDomainEntity) : RoleDomainEntityBase {
        const  {
            roleID,            
            roleDescription
        } = VO;

        return new RoleDomainEntityBase({

            roleID : roleID.valueOf(),
            roleDescription : roleDescription.valueOf()
        })
    }
    
    
    /**
     * Executes the method on the aggregate
     *
     * @param {RoleDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeRoleDescriptionUseCase
     */
    executeChangeRoleDescriptionAggregateRoot(
        entity: RoleDomainEntityBase): Promise <boolean> {
        return this.employeeAggregateRoot.ChangeRoleDescription(entity);
    }



}
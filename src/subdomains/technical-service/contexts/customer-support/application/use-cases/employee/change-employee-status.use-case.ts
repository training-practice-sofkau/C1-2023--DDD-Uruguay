import { IEmployeeStatusChangedResponse, IChangeEmployeeStatusCommand } from '../../../domain/interfaces/';

import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';
import { EmployeeAggregate } from '../../../domain/aggregates/employee/';
import { IEmployeeDomainService } from '../../../domain/services/employee/employee.domain-service';
import { EmployeeStatusChangedEventPublisherBase } from '../../../domain/events/publishers/employee/employee-status-changed.event-publisher';
import { IEmployeeDomainEntity } from '../../../domain/entities/interfaces';
import { UUIDValueObject, TrueFalseValueObject } from '../../../domain/value-objects/common';
import { EmployeeDomainEntityBase } from '../../../domain/entities/employee/employee.domain-entity';



export class ChangeEmployeeStatusUseCase<
    Command extends IChangeEmployeeStatusCommand = IChangeEmployeeStatusCommand,
    Response extends IEmployeeStatusChangedResponse = IEmployeeStatusChangedResponse
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
     * Creates and returns a new Employee Entity with only the needed info
     *
     * @param {Command} command
     * @return {*}  {Promise< boolean >}
     * @memberof ChangeEmployeeStatusUseCase
     */
    executeCommand(command: Command): Promise<boolean> {

        const VO = this.createValueObject(command);
        this.validateValueObject(VO);

        const entity = this.createEmployeeEntityDomain(VO);

        return this.executeChangeEmployeeStatusAggregateRoot(entity);
    }
    

    /**
     * Generates a Employee entity with the needed values (new Status)
     *
     * @param {Command} command
     * @return {*}  {IEmployeeDomainEntity}
     * @memberof ChangeEmployeeStatusUseCase
     */
    createValueObject(command: Command): IEmployeeDomainEntity {

        const employeeID = new UUIDValueObject(command.employeeID);
        const employeeIsActive = new TrueFalseValueObject(command.newStatus);

        return {

            employeeID,
            employeeIsActive
        }
    }

    /**
     * Checks that the information of the newly created VO is valid
     *
     * @private
     * @param {IEmployeeDomainEntity} VO
     * @memberof ChangeEmployeeStatusUseCase
     */
    private validateValueObject(VO: IEmployeeDomainEntity) {
        const {
            employeeID,
            employeeIsActive
        } = VO;

        // validates Employee ID
        if(employeeID instanceof UUIDValueObject && employeeID.hasErrors())
            this.setErrors(employeeID.getErrors());

        // validates Employee Email
        if(employeeIsActive instanceof TrueFalseValueObject && employeeIsActive.hasErrors())
        this.setErrors(employeeIsActive.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
            'ChangeEmployeeStatusUseCase command execution return some errors!',
            this.getErrors(),
        );
    }

    /**
     *  Creates and returns a new Employee Entity with only the needed info
     *
     * @param {IEmployeeDomainEntity} VO
     * @return {*} 
     * @memberof ChangeEmployeeStatusUseCase
     */
    createEmployeeEntityDomain(VO: IEmployeeDomainEntity) {
       
        const {
            employeeID,
            employeeIsActive
        } = VO;

        return new EmployeeDomainEntityBase({
            employeeID: employeeID.valueOf(),
            employeeIsActive: employeeIsActive.valueOf()
        })
    }

   
    /**
     * Executes the method on the aggregate
     *
     * @param {EmployeeDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeEmployeeStatusUseCase
     */
    executeChangeEmployeeStatusAggregateRoot(        
        entity: EmployeeDomainEntityBase): Promise <boolean> {
            return this.employeeAggregateRoot.ChangeEmployeeStatus(entity);
    }
   

}
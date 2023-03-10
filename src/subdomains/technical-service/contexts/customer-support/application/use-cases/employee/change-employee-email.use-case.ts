import { IChangeEmployeeMailCommand } from '../../../domain/interfaces/commands/employee/change-employee-email.command';
import { IEmployeeEmailChangedResponse } from '../../../domain/interfaces/responses/employee/employee-email-changed.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { EmployeeAggregate } from '../../../domain/aggregates/employee/employee.aggregate';
import { IEmployeeDomainService } from '../../../domain/services/employee/employee.domain-service';
import { EmployeeEmailChangedEventPublisherBase } from '../../../domain/events/publishers/employee/employee-email-changed.event-publisher';
import { IEmployeeDomainEntity } from '../../../domain/entities/interfaces/employee/employee.domain-entity.interface';
import { UUIDValueObject } from '../../../domain/value-objects/common/uuid/uuid.value-object';
import { EmailValueObject } from '../../../domain/value-objects/common/email/email.value-object';
import { ValueObjectException } from 'src/libs';
import { EmployeeDomainEntityBase } from '../../../domain/entities/employee/employee.domain-entity';

export class ChangeEmployeeEmailUseCase<
    Command extends IChangeEmployeeMailCommand = IChangeEmployeeMailCommand,
    Response extends IEmployeeEmailChangedResponse = IEmployeeEmailChangedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly employeeAggregateRoot: EmployeeAggregate;

    constructor(
        private readonly employeeService: IEmployeeDomainService,
        private readonly employeeEmailChangedEventPublisherBase: EmployeeEmailChangedEventPublisherBase
    ) {
        super();
        this.employeeAggregateRoot = new EmployeeAggregate({
            employeeService,
            employeeEmailChangedEventPublisherBase
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
     * @return {*}  {Promise< boolean >}
     * @memberof ChangeEmployeeEmailUseCase
     */
    private async executeCommand(command: Command) : Promise< boolean >{
         
        const VO = this.createValueObject(command);
        this.validateValueObject(VO);

        const entity = this.createEmployeeEntityDomain(VO);

        return this.executeChangeEmployeeEmailAggregateRoot(entity);

    }    

    /**
     * Creates and returns a new Employee Entity with only the needed info
     *
     * @param {IEmployeeDomainEntity} VO
     * @return {*}  {EmployeeDomainEntityBase}
     * @memberof ChangeEmployeeEmailUseCase
     */
    createEmployeeEntityDomain(VO: IEmployeeDomainEntity): EmployeeDomainEntityBase {
        
        const{
            employeeID,
            employeeEmail
        }=VO;

        return new EmployeeDomainEntityBase({
            employeeID: employeeID.valueOf(),
            employeeEmail: employeeEmail.valueOf()
        })

    }
    
    /**
     * Generates a Employee entity with the needed values (new email)
     *
     * @param {Command} command
     * @return {*}  {IEmployeeDomainEntity}
     * @memberof ChangeEmployeeEmailUseCase
     */
    createValueObject (command: Command): IEmployeeDomainEntity {
        
        const employeeID = new UUIDValueObject(command.employeeID);
        const employeeEmail = new EmailValueObject(command.employeeNewEmail);

        return{

            employeeID,
            employeeEmail
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IEmployeeDomainEntity} VO
     * @memberof ChangeEmployeeEmailUseCase
     */
    validateValueObject(VO: IEmployeeDomainEntity) {
        const {
            employeeID,
            employeeEmail
        } = VO;

        // validates Employee ID
        if(employeeID instanceof UUIDValueObject && employeeID.hasErrors())
            this.setErrors(employeeID.getErrors());

        // validates Employee Email
        if(employeeEmail instanceof EmailValueObject && employeeEmail.hasErrors())
        this.setErrors(employeeEmail.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
            'ChangeEmployeeEmailUseCase command execution return some errors!',
            this.getErrors(),
        );
    }


    /**
     *  Executes the method on the aggregate
     *
     * @param {EmployeeDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeEmployeeEmailUseCase
     */
    executeChangeEmployeeEmailAggregateRoot(
        entity: EmployeeDomainEntityBase): Promise <boolean> {
        return this.employeeAggregateRoot.ChangeEmployeeEmail(entity);
    }

    


}
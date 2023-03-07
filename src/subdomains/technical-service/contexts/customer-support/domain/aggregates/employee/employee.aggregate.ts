import { AggregateRootException } from 'src/libs/sofka/exceptions';

import { 
    ICreateEmployeeCommand, 
    IChangeEmployeeMailCommand, 
    IChangeEmployeeStatusCommand 
} from '../../interfaces';

import { IEmployeeDomainService, IRoleDomainService } from '../../services/employee';

import { 
    EmployeeEmailChangedEventPublisherBase, 
    EmployeeCreatedEventPublisherBase, 
    RoleCreatedEventPublisherBase,
    EmployeeStatusChangedEventPublisherBase,
    RoleDescriptionChangedEventPublisherBase,
} from '../../events/publishers/employee';

import { 
    ChangeEmployeeEmail, 
    ChangeEmployeeStatus, 
    CreateEmployee,
} from './helpers/employee-service';

export class EmployeeAggregate implements IEmployeeDomainService {

    private readonly employeeService?: IEmployeeDomainService;
    private readonly employeeCreatedEventPublisherBase?: EmployeeCreatedEventPublisherBase;
    private readonly employeeEmailChangedEventPublisherBase?: EmployeeEmailChangedEventPublisherBase;
    private readonly employeeStatusChangedEventPublisherBase?: EmployeeStatusChangedEventPublisherBase;
    private readonly roleCreatedEventPublisherBase?: RoleCreatedEventPublisherBase;
    private readonly roleDescriptionChangedEventPublisherBase?: RoleDescriptionChangedEventPublisherBase;

    constructor(
        {
            employeeService,
            employeeCreatedEventPublisherBase,
            employeeEmailChangedEventPublisherBase,
            employeeStatusChangedEventPublisherBase,

        }: {
            employeeService?: IEmployeeDomainService,
            employeeCreatedEventPublisherBase?: EmployeeCreatedEventPublisherBase,
            employeeEmailChangedEventPublisherBase?: EmployeeEmailChangedEventPublisherBase,
            employeeStatusChangedEventPublisherBase?: EmployeeStatusChangedEventPublisherBase
        }) {

        this.employeeService = employeeService;
        this.employeeCreatedEventPublisherBase = employeeCreatedEventPublisherBase;
        this.employeeEmailChangedEventPublisherBase = employeeEmailChangedEventPublisherBase;
        this.employeeStatusChangedEventPublisherBase = employeeStatusChangedEventPublisherBase;
    }


// #region EMPLOYEE methods


    /**
     * Creates a new employee
     *
     * @param {ICreateEmployeeCommand} employeeData
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeAggregate
     */
    async CreateEmployee(employeeData: ICreateEmployeeCommand): Promise<boolean> {

        if (!this.employeeService) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeService" is not defined!');
        }
        if (!this.employeeCreatedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeCreatedEventPublisherBase" is not defined!');
        }

        return await CreateEmployee(employeeData, this.employeeService, this.employeeCreatedEventPublisherBase);
    
    }



    /**
     * Allows to change the employee email address
     *
     * @param {IChangeEmployeeMailCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeAggregate
     */
    async ChangeEmployeeEmail(data: IChangeEmployeeMailCommand): Promise<boolean> {
        
        if (!this.employeeService) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeService" is not defined!');
        }
        if (!this.employeeEmailChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeEmailChangedEventPublisherBase" is not defined!');
        }

        return await ChangeEmployeeEmail(data, this.employeeService, this.employeeEmailChangedEventPublisherBase);
    }



    async changeEmployeeStatus(data: IChangeEmployeeStatusCommand): Promise<boolean> {

        if (!this.employeeService) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeService" is not defined!');
        }
        if (!this.employeeStatusChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "EmployeeStatusChangedEventPublisherBase" is not defined!');
        }

        return await ChangeEmployeeStatus(data, this.employeeService, this.employeeStatusChangedEventPublisherBase);
    }

// #endregion

}
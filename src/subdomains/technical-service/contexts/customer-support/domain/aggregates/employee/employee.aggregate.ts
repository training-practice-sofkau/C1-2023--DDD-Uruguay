import { AggregateRootException } from 'src/libs/sofka/exceptions';

import {
    ICreateEmployeeCommand,
    IChangeEmployeeMailCommand,
    IChangeEmployeeStatusCommand,
    IChangeRoleDescriptionCommand,
    ICreateRoleCommand,
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


import { ChangeRoleDescription, CreateRole } from './helpers/role-service';

export class EmployeeAggregate implements IEmployeeDomainService, IRoleDomainService {

    private readonly employeeService?: IEmployeeDomainService;
    private readonly roleService?: IRoleDomainService;
    private readonly employeeCreatedEventPublisherBase?: EmployeeCreatedEventPublisherBase;
    private readonly employeeEmailChangedEventPublisherBase?: EmployeeEmailChangedEventPublisherBase;
    private readonly employeeStatusChangedEventPublisherBase?: EmployeeStatusChangedEventPublisherBase;
    private readonly roleCreatedEventPublisherBase?: RoleCreatedEventPublisherBase;
    private readonly roleDescriptionChangedEventPublisherBase?: RoleDescriptionChangedEventPublisherBase;

    constructor(
        {
            employeeService,
            roleService,
            employeeCreatedEventPublisherBase,
            employeeEmailChangedEventPublisherBase,
            employeeStatusChangedEventPublisherBase,
            roleCreatedEventPublisherBase,
            roleDescriptionChangedEventPublisherBase,
        }: {
            employeeService?: IEmployeeDomainService,
            roleService?: IRoleDomainService,
            employeeCreatedEventPublisherBase?: EmployeeCreatedEventPublisherBase,
            employeeEmailChangedEventPublisherBase?: EmployeeEmailChangedEventPublisherBase,
            employeeStatusChangedEventPublisherBase?: EmployeeStatusChangedEventPublisherBase,
            roleCreatedEventPublisherBase?: RoleCreatedEventPublisherBase,
            roleDescriptionChangedEventPublisherBase?: RoleDescriptionChangedEventPublisherBase,
        }) {

        this.employeeService = employeeService;
        this.roleService = roleService;
        this.employeeCreatedEventPublisherBase = employeeCreatedEventPublisherBase;
        this.employeeEmailChangedEventPublisherBase = employeeEmailChangedEventPublisherBase;
        this.employeeStatusChangedEventPublisherBase = employeeStatusChangedEventPublisherBase;
        this.roleCreatedEventPublisherBase = roleCreatedEventPublisherBase;
        this.roleDescriptionChangedEventPublisherBase = roleDescriptionChangedEventPublisherBase;
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

    /**
     * Allows to change the employee status
     *
     * @param {IChangeEmployeeStatusCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeAggregate
     */
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

    // #region ROLE methods
    

    /**
     * Creates a new employee Role
     *
     * @param {ICreateRoleCommand} roleData
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeAggregate
     */
    async CreateRole(roleData: ICreateRoleCommand): Promise<boolean> {

        if (!this.roleService) {
            throw new AggregateRootException('InvoiceAggregate: "RoleService" is not defined!');
        }
        if (!this.roleCreatedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "RoleCreatedEventPublisherBase" is not defined!');
        }

        return await CreateRole(roleData, this.roleService, this.roleCreatedEventPublisherBase);
    }



    /**
     * Changes the role description
     *
     * @param {IChangeRoleDescriptionCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeAggregate
     */
    async ChangeRoleDescription(data: IChangeRoleDescriptionCommand): Promise<boolean> {

        if (!this.roleService) {
            throw new AggregateRootException('InvoiceAggregate: "RoleService" is not defined!');
        }
        if (!this.roleDescriptionChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "RoleDescriptionChangedEventPublisherBase" is not defined!');
        }

        return await ChangeRoleDescription(data, this.roleService, this.roleDescriptionChangedEventPublisherBase);
    }
    // #endregion

}
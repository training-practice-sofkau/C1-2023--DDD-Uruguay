import { EmployeeDomainEntityBase } from "../../entities/employee/employee.domain-entity";
import { IChangeEmployeeMailCommand, IChangeEmployeeStatusCommand } from '../../interfaces/commands/employee';

export interface IEmployeeDomainService{

    CreateEmployee(employeeData: EmployeeDomainEntityBase) : Promise < EmployeeDomainEntityBase | null >; // ICreateEmployeeCommand

    ChangeEmployeeEmail(data: EmployeeDomainEntityBase) : Promise < boolean >;

    changeEmployeeStatus(data: IChangeEmployeeStatusCommand) : Promise < boolean >;

}
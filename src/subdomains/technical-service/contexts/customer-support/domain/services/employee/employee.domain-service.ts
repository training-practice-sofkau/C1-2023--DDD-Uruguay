import { ICreateEmployeeCommand } from "../../interfaces";
import { IChangeEmployeeMailCommand, IChangeEmployeeStatusCommand } from '../../interfaces/commands/employee';

export interface IEmployeeDomainService{

    createEmployee(employeeData: ICreateEmployeeCommand) : Promise < boolean >;

    changeEmployeeEmail(data: IChangeEmployeeMailCommand) : Promise < boolean >;

    changeEmployeeStatus(data: IChangeEmployeeStatusCommand) : Promise < boolean >;

}
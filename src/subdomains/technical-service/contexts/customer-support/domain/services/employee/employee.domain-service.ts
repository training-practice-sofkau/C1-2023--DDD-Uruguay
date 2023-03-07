import { ICreateEmployeeCommand } from "../../interfaces";
import { IChangeEmployeeMailCommand, IChangeEmployeeStatusCommand } from '../../interfaces/commands/employee';

export interface IEmployeeDomainService{

    CreateEmployee(employeeData: ICreateEmployeeCommand) : Promise < boolean >;

    ChangeEmployeeEmail(data: IChangeEmployeeMailCommand) : Promise < boolean >;

    changeEmployeeStatus(data: IChangeEmployeeStatusCommand) : Promise < boolean >;

}
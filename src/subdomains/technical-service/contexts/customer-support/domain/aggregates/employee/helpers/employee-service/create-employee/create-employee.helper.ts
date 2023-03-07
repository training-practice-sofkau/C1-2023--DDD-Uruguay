import { EmployeeCreatedEventPublisherBase } from "../../../../../events/publishers/employee";
import { ICreateEmployeeCommand } from "../../../../../interfaces";
import { IEmployeeDomainService } from "../../../../../services/employee";

export const CreateEmployee = async (
    employeeData: ICreateEmployeeCommand,
    employeeService: IEmployeeDomainService,
    employeeCreatedEventPublisherBase: EmployeeCreatedEventPublisherBase
): Promise<boolean> => {

    const result = await employeeService.CreateEmployee(employeeData);
    employeeCreatedEventPublisherBase.response = result;
    employeeCreatedEventPublisherBase.publish();

    return result;
}
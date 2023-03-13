import { EmployeeDomainEntityBase } from "../../../../../entities/employee/employee.domain-entity";
import { EmployeeCreatedEventPublisherBase } from "../../../../../events/publishers/employee";
import { ICreateEmployeeCommand } from "../../../../../interfaces";
import { IEmployeeDomainService } from "../../../../../services/employee";

export const CreateEmployee = async (
    employeeData: EmployeeDomainEntityBase,// ICreateEmployeeCommand,
    employeeService: IEmployeeDomainService,
    employeeCreatedEventPublisherBase: EmployeeCreatedEventPublisherBase
): Promise< EmployeeDomainEntityBase | null > => {

    const result = await employeeService.CreateEmployee(employeeData);
    employeeCreatedEventPublisherBase.response = result;
    employeeCreatedEventPublisherBase.publish();

    return result;
}
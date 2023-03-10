import { EmployeeEmailChangedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IEmployeeDomainService } from "../../../../../services/employee";
import { IChangeEmployeeMailCommand } from '../../../../../interfaces/commands/employee/change-employee-email.command';
import { EmployeeDomainEntityBase } from "../../../../../entities/employee/employee.domain-entity";

export const ChangeEmployeeEmail = async (
    data: EmployeeDomainEntityBase,
    employeeService: IEmployeeDomainService,
    employeeEmailChangedEventPublisherBase: EmployeeEmailChangedEventPublisherBase
): Promise<boolean> => {

    const result = await employeeService.ChangeEmployeeEmail(data);
    employeeEmailChangedEventPublisherBase.response = result;
    employeeEmailChangedEventPublisherBase.publish();

    return result;
}